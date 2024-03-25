import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from "../post.model";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class PostsService {

//   constructor() { }
// }

@Injectable({providedIn: 'root'}) //this is a shortcut to provide the service in the root module
export class PostsService {
  private posts: Post[] = []; //array: reference type
  private postsUpdated = new Subject<Post[]>();

// cannot inject the httpclient module here, because it is not available in the root module
// so we need to import the HttpClientModule in the app.module.ts
// and then inject the httpclient module in the constructor
   constructor(private http: HttpClient) { }

  getPosts(){
    // shall be post._id but "post.id" works ,
    this.http.get<{message: string, posts: Post[]}>('http://localhost:3000/api/posts')
    .pipe(map((postData) => {
      return postData.posts.map(post => {
        return {
          title: post.title,
          content: post.content,
          id: post.id
        };
      });
    } ))
    .subscribe((transformedPosts) => {
      this.posts = transformedPosts;
      this.postsUpdated.next([...this.posts]);
    });
  }
  getPostUpdateListener(){
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string){
    const post: Post = {id: "",title: title, content: content};
    this.http.post<{postId: string ,message: string}>('http://localhost:3000/api/posts', post)
    .subscribe((responseData) => {
      const Id = responseData.postId;
      post.id = Id;
      this.posts.push(post);
      this.postsUpdated.next([...this.posts]);
    });
  }

  deletePost(postId: string){
    this.http.delete('http://localhost:3000/api/posts/' + postId)
    .subscribe((result) => {
      console.log('Deleted:' + result);
      const updatedPosts = this.posts.filter(post => post.id !== postId);
      this.posts = updatedPosts;
      this.postsUpdated.next([...this.posts]);
    }, error => {
      console.error('Error deleting post:', error);
    });
  }
}
