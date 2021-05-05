import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { PhonebookComponent } from './pages/phonebook/phonebook.component';
import { BlogComponent } from './pages/blog/blog.component';
// import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './pages/post/post.component';

const routes: Routes = [
  {path: 'inicio', component: HomeComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'blog/:category', component: BlogComponent},
  {path: 'nosotros', component: AboutComponent},
  {path: 'directorio', component: PhonebookComponent},
  {path: 'post/:id', component: PostComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
