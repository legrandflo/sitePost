import { Subject } from 'rxjs/Rx';

import { Injectable } from '@angular/core';
import { Post } from './post';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostService {
    //on crée un subject qui emettra des arrays d'objets de type Post
    postSubject = new Subject<Post[]>();

    //creation tableau d'objets d'appareils pour le ngFor
    public posts: Post[] = [
        {
            title: "Mon premier post",
            content: `gjhsgdjhgjhdghjkfgs sdkfjhqsdkghqksd sdfqshjdgjkfqhsdk sdfhqskdjfhgk
    shdfqsdhfsq kdfsjhqskdjhqsk skdjfhqskjdfh skkdjjfhqskjdhf sjl qsjhfkqf
    ssdkfjhskhfs skdjfhskjdfh sdfkjhskfj ldsjkfsldkfhsl sdfjhskjdfh.........` ,
            loveIts: 0,
            created_at: new Date()
        },
        {
            title: "Mon deuxième post",
            content: `azeazeazeazeazeazeazeaze eaeazeae azeazeazeaze zaeazeaze azeaze
  eazeazea azeazeaze azeazeazeaze azeazeaze azeazeaze azeazeaze azeazeaze
  azeazeaz azeazeaze azeazeaze aze.........`,
            loveIts: 0,
            created_at: new Date()
        },
        {
            title: "Encore un post",
            content: `cwxcwxcwxc cwxcwxcwx cwxcwxcwxcwxcwxcwxcwxcwxcwxcw wxcwxcwxcwxcw
  wxcwxcwxc wxcwxcwx xcwxcwxc wxcwxxxxxxxxxxxxxxxxxxxxxcwxcwxcwxc cxwxcwxcwxcwxc
  wxcwxcwxcwxc wxcwxcwxc wxcwxcwxcwxc wxcwxcwxcwxc.........`,
            loveIts: 0,
            created_at: new Date()
        }
    ]

    constructor(private httpClient:HttpClient){}

    emitPost() {
        //slice pour faire une copie de array appareils
        this.postSubject.next(this.posts.slice());
    }
    //mise a jour du nombre de loveIts venant du component PostListItemsComponent
    updateLike(indexPost, nbreLoveIts) {
        this.posts[indexPost]['loveIts'] = nbreLoveIts,
            this.emitPost();
    }
    //ajout d'un post venant du component NewPostComponent
    addPost(post) {
        this.posts.push(post);
        this.emitPost();
    }
    //suppression d'un post grâce à son index récupérer dans le component PostListItemsComponent
    deletePost(indexPost) {
        this.posts.splice(indexPost, 1);//supprime 1 element a la position NewIndexOfListe
        this.emitPost();
    }

    //envoyer la liste des posts à la base de données firebase
    savePostsToServer() {
        this.httpClient
          .put('https://listeblog-f3d92.firebaseio.com/posts.json', this.posts)
          .subscribe(
            () => {
              console.log('Enregistrement terminé !');
            },
            (error) => {
              console.log('Erreur ! : ' + error);
            }
          );
    }

    //recevoir la liste des posts de la base de données firebase
    getPostsFromServer() {
        this.httpClient
          .get<any[]>('https://listeblog-f3d92.firebaseio.com/posts.json')
          .subscribe(
            (response) => {
              this.posts = response;
              this.emitPost();
            },
            (error) => {
              console.log('Erreur ! : ' + error);
            }
          );
    }

}

