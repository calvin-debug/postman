import { Component, signal, effect, computed } from '@angular/core';
import { PostsService } from "../../services/posts.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css',
})
export class PostsListComponent {
  constructor(
    protected postsService: PostsService,
    private router: Router
  ) {
    effect(() => {
      console.log(this.search())
      console.log(this.appendedString())
    })
  }

  posts$ = this.postsService.getPosts$();

  search = signal<string>("")
  appendedString = computed(() => this.search() + " appended")

  navigateToPost(id: number) {
    this.router.navigate(['/posts', id]);
  }

  refreshPosts() {
    this.postsService.refresh$.next();
  }
}
