import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CheckBoxData } from 'src/app/models/CheckBoxData';
import { Categoria, Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  public postCurrent: number;
  public readonly postLimit: number;
  public categoryFilter: string = '';
  public postListSize: number;
  public postsList: Post[];
  public categoriesList: (CheckBoxData)[] = [];
  public searchQuery: string = '';
  public searchParams: string = '';

  constructor(private _postService: PostService,
              private _activatedRoute:ActivatedRoute,
              private _router:Router) {
    this.postsList = new Array<Post>();
    this.postListSize = 0;
    this.postLimit = 4;
    this.postCurrent = 0;
    this._router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.loadCategories();
    
    this._postService.getPostsListSize(this.categoryFilter, this.searchParams).subscribe(size => {
      this.postListSize = size;
    }, err => console.error(err));
    this.loadPostList();
  }

  goTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  
  loadCategoryFilterFromURL(){
    const category = this._activatedRoute.snapshot.paramMap.get('category');
    this.categoriesList.forEach((categ: CheckBoxData) => categ.value = false);
    const result = this.categoriesList.find( (categ:CheckBoxData)=>categ.name === category);
    if(result){
      result.value = true;
      this.valueChanged(result);
    }
  }
  
  loadCategories(): void {
    this._postService.getEnabledCategories().subscribe(
      (res: Categoria[]) => {
        this.categoriesList = res.map((value) => new CheckBoxData(value.nombre || '', false));
        this.loadCategoryFilterFromURL();//TODO: Revisar si esto va aqui
      }, err => console.error(err));
  }
  async valueChanged(category: CheckBoxData) {
    this.categoryFilter = '';
    for (let category of this.categoriesList) {
      if (category.value) {
        this.categoryFilter += `_where[categorias.nombre]=${category.name}&`;
      }
    }
    await this.loadPostList(true);
  }

  async deletePostsList(): Promise<void>{
    this.postsList = [];
  }
  
  async loadPostList(clear:boolean =  false): Promise<void> {
    this._postService.getPostsListSize(this.categoryFilter, this.searchParams).subscribe(
      size => {
        this.postListSize = size;
      })
      if(clear) this.postCurrent = 0;
      this._postService.getPostList(this.categoryFilter,this.searchParams, this.postCurrent, this.postLimit).subscribe(
      (posts: Post[]) => {
        if(clear){
          this.deletePostsList().then( ()=> {
            this.postsList.push(...posts);
          })
        }
        else{
          this.postsList.push(...posts);
        }        
      },
      err => {
        console.error(err)
      }
    );
  }

  async loadPostListSearch(): Promise<void> {
    if (this.searchQuery) {
      this.searchParams = '';
      this.searchParams += `_where[_or][0][contenido_contains]=${this.searchQuery}&`;
      this.searchParams += `_where[_or][1][titulo_contains]=${this.searchQuery}&`;
      this.searchParams += `_where[_or][2][descripcion_contains]=${this.searchQuery}&`;
      await this.loadPostList(true);
    }else{
      this.searchParams = '';
      await this.loadPostList(true);
    }
  }
  onScroll() {
    if(this.postCurrent <= this.postListSize){
      this.postCurrent += this.postLimit;
      this.loadPostList();
    }
  }
}