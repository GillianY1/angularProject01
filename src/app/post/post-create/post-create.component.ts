import { Component,EventEmitter, OnInit , Output} from '@angular/core';
import { Post } from '../../post.model'; // Import the Post model

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

  onAddPost() {
    const post: Post = { // Update the type of post
      title: this.enteredTitle,
      content: this.enteredContent
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
