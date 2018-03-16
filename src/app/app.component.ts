import { Component } from '@angular/core';
import { Post } from './post';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  
//creation tableau d'objets d'appareils pour le ngFor
 posts : Post[] = [
  {
    title:"Mon premier post",
  content : `gjhsgdjhgjhdghjkfgs sdkfjhqsdkghqksd sdfqshjdgjkfqhsdk sdfhqskdjfhgk
  shdfqsdhfsq kdfsjhqskdjhqsk skdjfhqskjdfh skkdjjfhqskjdhf sjl qsjhfkqf
  ssdkfjhskhfs skdjfhskjdfh sdfkjhskfj ldsjkfsldkfhsl sdfjhskjdfh.........` ,
  loveIts : 0,
  created_at: new Date()
},
{
  title:"Mon deuxième post",
content : `azeazeazeazeazeazeazeaze eaeazeae azeazeazeaze zaeazeaze azeaze
eazeazea azeazeaze azeazeazeaze azeazeaze azeazeaze azeazeaze azeazeaze
azeazeaz azeazeaze azeazeaze aze.........`,
loveIts : 0,
created_at:new Date()
},
{
  title:"Encore un post",
content : `cwxcwxcwxc cwxcwxcwx cwxcwxcwxcwxcwxcwxcwxcwxcwxcw wxcwxcwxcwxcw
wxcwxcwxc wxcwxcwx xcwxcwxc wxcwxxxxxxxxxxxxxxxxxxxxxcwxcwxcwxc cxwxcwxcwxcwxc
wxcwxcwxcwxc wxcwxcwxc wxcwxcwxcwxc wxcwxcwxcwxc.........`,
loveIts : 0,
created_at:new Date()
}
]

constructor(){
  
}
}
