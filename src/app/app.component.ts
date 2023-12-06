import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-project';

  userName:string='';

  textValue:string='';

 

  listofPost : any[]=[
    { postId:1, postName :"abc1"},
    {postId:2, postName :"abc2"},
    {postId:3, postName :"abc3"},
    {postId:4, postName :"abc4"}

]

  constructor()
  {
    
    
  }

  onKeyup()
  {
    console.log(this.textValue);
  }
  addData()
  {
    this.listofPost.push({postId:5,postName:'abc5'});
  }

  deletePost(post:any)
  {
    let index =this.listofPost.indexOf(post);
    this.listofPost.splice(index,1);
  }
}
