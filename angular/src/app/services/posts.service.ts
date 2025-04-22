import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { forkJoin, map, startWith, Subject, switchMap, interval, combineLatest } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(
    private http: HttpClient
  ) {}

  myInterval$ = interval(3000);
  refresh$ = new Subject<void>();

  

  public getPosts$() {
    return combineLatest([
      this.myInterval$.pipe(startWith(0)),
      this.refresh$.pipe(startWith(null))
    ]).pipe(
      startWith(null),
      switchMap(() => this.http.get<any[]>("https://jsonplaceholder.typicode.com/posts"))
    )
  }

  public getPostById$(id: number) {
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }

  public getPostComments$(id: number) {
    return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
  }

  public getPostWithComments$(id: number) {
    return forkJoin([
      this.getPostById$(id),
      this.getPostComments$(id)
    ]).pipe(
      map(([post, comments]) => {
        return {
          ...post,
          comments
        }
      })
    )
  }
}
