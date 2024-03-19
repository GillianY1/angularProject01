import { Component,EventEmitter, OnInit , Output} from '@angular/core';
import { Post } from '../../post.model'; // Import the Post model
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
  newPost ="no content";
  enteredTitle = "";
  enteredContent = "";
  @Output() postCreated = new EventEmitter<Post>(); // Update the type of EventEmitter

  constructor() { }

  ngOnInit(): void {
  }

  onAddPost(form: NgForm) {
    if(form.invalid){
      return;
    }
    const post: Post = {
      title: form.value.title,
      content:form.value.content
    };
    this.postCreated.emit(post);
  }

  /*
  onAddPost(postInput: HTMLTextAreaElement){
   // console.dir(postInput);
   // console.log(postInput.value);
    this.newPost =  this.enteredValue; //postInput.value;
  }
  */
}
