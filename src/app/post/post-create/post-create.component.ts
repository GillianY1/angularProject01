import { PostsService } from './../posts.service';
import { Component, OnInit } from '@angular/core';
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
  //@Output() postCreated = new EventEmitter<Post>(); // remove the EventEmitter

  constructor(public postService: PostsService ) { }

  ngOnInit(): void {
  }

  onAddPost(form: NgForm) {
    if(form.invalid){
      return;
    }
    // const post: Post = {
    //   title: form.value.title,
    //   content:form.value.content
    // };
    //this.postCreated.emit(post);

    this.postService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }

}
