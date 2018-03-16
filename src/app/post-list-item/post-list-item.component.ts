import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreatedAt: string;
  constructor() { }

  ngOnInit() {
  }
  onLoveIt(){
    this.postLoveIts = this.postLoveIts +1;
    console.log('Love It : ', this.postLoveIts);
  }
  onDontLoveIt(){
    this.postLoveIts = this.postLoveIts -1;
    console.log("Don't Love It!! : ",this.postLoveIts);
  }

}
