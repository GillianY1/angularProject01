import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
  newPost ="no content";
  enteredValue= " ";
  constructor() { }

  ngOnInit( ): void {
  }
  onAddPost(postInput: HTMLTextAreaElement){
   // console.dir(postInput);
   // console.log(postInput.value);
    this.newPost =  this.enteredValue; //postInput.value;
  }

}
