import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent {
  constructor(
    private route: ActivatedRoute,
    protected postsService: PostsService
  ) {
    this.route.params.subscribe((params) => {
      // this.postsService.getPostWithComments(params["id"]);
    });
  }

  getCommentTitle(comment: any) {
    return `Comment ${comment.id} for post ${comment.postId}`;
  }
}
