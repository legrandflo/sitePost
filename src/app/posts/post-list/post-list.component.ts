import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {
  //on crée un tableau de posts avec Post de post.ts
  postsItems: Post[];
  //on crée une variable pour subscription
  userSubscription: Subscription;
  constructor(public postService: PostService) { }

  ngOnInit() {
    //creation de la subscription en souscrivant (subscribe) au subject crée dans la service
    this.userSubscription = this.postService.postSubject.subscribe(
      (posts: Post[]) => { this.postsItems = posts; }//il emet un array de type users et on rempli le tableau crée ci dessus
    );
    this.postService.emitPost();//puis on emet le subject
  }
  //sauvegarde de la liste des posts au bouton
  onSave() {
    this.postService.savePostsToServer();
}
//récupération de la liste des posts au bouton
onFetch() {
  this.postService.getPostsFromServer();
}
  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}

