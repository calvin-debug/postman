import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpClient
  ) { }

  public getPosts() {
    return
  }

  public getPostById(id: number) {
    return
  }

  public getPostComments(id: number) {
    return
  }
}
