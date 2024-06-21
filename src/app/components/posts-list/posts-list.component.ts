import { Component } from '@angular/core';
import {PostsService} from "../../services/posts.service";

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent {
  constructor(
    private postsService: PostsService
  ) { }
}
