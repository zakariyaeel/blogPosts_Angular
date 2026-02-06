import { Component, inject, OnInit } from '@angular/core';
import {PostService} from '../post-service';

@Component({
  selector: 'app-post',
  templateUrl: './post.html',
  styleUrl: './post.css',
})

export class Post implements OnInit{
  posts: any[] = [];
  filtredPosts :any[] = [];
  curPage = 1;
  perPage = 6;
  keyword = "";
  postService = inject(PostService); // inject = is new version of constructor in angular

  ngOnInit(){
    this.postService.getPosts().subscribe(
      (data: any) => {
        this.posts = data;
        this.filtredPosts = this.posts.filter((post:any)=>post.title.includes(this.keyword));
      }
    );
  }

  // 10 post to show
  get pagedPosts(){
    const startIdx = (this.curPage -1) * this.perPage;

    return this.filtredPosts.slice(startIdx, (startIdx + this.perPage));
  }

  // button to next page event binding
  nextPage(){
    if((this.curPage * this.perPage) <this.filtredPosts.length){
      this.curPage++;
    }
  }

  // button to previous page event binding
  prevPage(){
    if(this.curPage>1){
      this.curPage--;
    }
  }

  // search event binding
  serchPosts(event :any){
    this.keyword = event.target.value.toLowerCase();
    
    this.filtredPosts = this.posts.filter((post:any)=>post.title.toLowerCase().includes(this.keyword));
    this.curPage = 1;
  }

}
