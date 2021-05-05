//angular modules
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es-CR';
registerLocaleData(localeEs, 'es-CR');

//config
import { environment } from 'src/environments/environment';

// angular material
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';


//components
import { BlogComponent } from './pages/blog/blog.component';
import { PostComponent } from './pages/post/post.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { PhonebookComponent } from './pages/phonebook/phonebook.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { DarktoggleComponent } from './components/darktoggle/darktoggle.component';
import { FabComponent } from './components/fab/fab.component';


//external dependencies
import { ShowdownModule } from 'ngx-showdown';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    AppComponent,
    PostCardComponent,
    NavbarComponent,
    HomeComponent,
    BlogComponent,
    PostComponent,
    PhonebookComponent,
    AboutComponent,
    FooterComponent,
    DarktoggleComponent,
    FabComponent,
  ],
  imports: [
    BrowserModule,
    InfiniteScrollModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatChipsModule,
    MatCheckboxModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
    ShowdownModule.forRoot({emoji: true, noHeaderId: true, flavor: 'github'}),
    MatPaginatorModule,
    ReactiveFormsModule,
    MatSelectModule
    
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
