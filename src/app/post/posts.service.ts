import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from "../post.model";
import { HttpClient } from '@angular/common/http';

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
    this.http.get<{message: string, posts: Post[]}>('http://localhost:3000/api/posts')
    .subscribe((postData) => {
      this.posts = postData.posts;
      this.postsUpdated.next([...this.posts]);
    });
  }
  getPostUpdateListener(){
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string){
    const post: Post = {id: "",title: title, content: content};
    this.http.post<{message: string}>('http://localhost:3000/api/posts', post)
    .subscribe((responseData) => {
      console.log(responseData.message);
      this.posts.push(post);
      this.postsUpdated.next([...this.posts]);
    });
  }

}
