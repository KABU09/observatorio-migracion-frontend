import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';
import { ThemeService } from '../../services/theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public matchQuery: any;
  public theme: string;
  public subscription:Subscription | undefined;

  constructor(private _themeService:ThemeService) {
    this.theme = 'light';
    this.matchQuery = window.matchMedia('(max-width: 767px)').matches;
  }
  ngOnInit(): void {
    this.subscription = this._themeService.currentTheme.subscribe(theme => {
      this.theme = theme;
    })
  }

}
