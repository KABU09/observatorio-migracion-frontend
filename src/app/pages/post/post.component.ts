import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ShowdownConverter } from 'ngx-showdown';
import { postStyleConfig } from '../../helpers/postStyleConfig';
import { Categoria } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [ShowdownConverter]
})
export class PostComponent implements OnInit {
  id: number | undefined;
  title: string | undefined;
  description: string | undefined;
  categories: Categoria[] | undefined;
  date: Date | undefined;
  api: string;
  public contentHTML: SafeHtml;


  constructor(private _postService: PostService, private _router: ActivatedRoute, private _sanitizer: DomSanitizer, private showdownConverter: ShowdownConverter) {
    this.contentHTML = "";
    this.api = environment.api.url;
  }

  ngOnInit(): void {
    this.loadPost();
  }
  async loadPost() {
    const id: string | null = this._router.snapshot.paramMap.get('id');
    const styles = postStyleConfig;
    if (id) {
      this._postService.getPostById(id).subscribe(
        post => {

          this.title = post.titulo;
          this.categories = post.categorias;
          this.date = post.published_at;

          if (post?.contenido) {
            const html = this.markDowntoHtml(post.contenido);
            this.contentHTML = this._sanitizer.bypassSecurityTrustHtml(html);
          }else{
          }

        },
        err => console.error(err));

    }
  }

  markDowntoHtml(text: string): string {
    let html = postStyleConfig + this.showdownConverter.makeHtml(text);
    let aux = '';
    while (aux !== html) {
      aux = html;
      html = html.replace('src="/uploads/', 'src="' + this.api + "/uploads/")
    }
    return html;
  }
}
