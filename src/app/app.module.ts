import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './posts/post-list/post-list.component';
import { NewPostComponent } from './posts/new-post/new-post.component';
import { PostListItemComponent } from './posts/post-list-item/post-list-item.component';
import { PostService } from './posts/post.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  //L'app demarre par AuthCompnent  grace a canActivate de 1ere path et AuthGuard qui redirige utilisateur vers AuthComponent(connexion) car au depart isAuth est false
  //il faut proteger avec canActivate les 3 routes principales de l'app 
  {path:'posts', component: PostListComponent},//canActivate redirige vers service AuthGuard pour authentification, lien dans navbar de app.component.html
  {path:'new', component: NewPostComponent},//route pour formulaire Reactive, utilisé dans user-list.component.html
  {path:'',component: PostListComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,//pour le formulaire
    RouterModule.forRoot(routes),//pour le routing
    HttpClientModule//pour contact avec la base de données
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
