import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsListComponent } from "./components/posts-list/posts-list.component";
import { PostDetailComponent } from './components/post-detail/post-detail.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "posts",
    pathMatch: "full"
  },
  {
    path: "posts",
    component: PostsListComponent
  },
  {
    path: "posts/:id",
    component: PostDetailComponent
  }
  // ...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
