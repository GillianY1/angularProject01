import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts =[
    {title:"Alfred Adler", content:"We are influenced not by what we have, but by what we think we have."},
    {title:"Second Post", content:"This is the second post's content"},
    {title:"Third Post", content:"This is the third post's content"}
  ]

  constructor() {
    this.posts = [];
   }

  ngOnInit(): void {
  }

}
