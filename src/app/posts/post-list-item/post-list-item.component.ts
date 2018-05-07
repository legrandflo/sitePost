import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() listeInputPost : Object;
  @Input() indexPost ;
  constructor(private postService:PostService) { }
 
  ngOnInit() {
  }
  onLoveIt(){
    this.listeInputPost['loveIts'] = this.listeInputPost['loveIts'] +1;
    //enregistrement des likes dans le service
    this.postService.updateLike(this.indexPost,this.listeInputPost['loveIts'])
  }
  onDontLoveIt(){
    this.listeInputPost['loveIts'] = this.listeInputPost['loveIts'] -1;
    //enregistrement des likes dans le service
    this.postService.updateLike(this.indexPost,this.listeInputPost['loveIts'])
  }
  
  delete(indexPost){
    this.postService.deletePost(indexPost)
  }

}
