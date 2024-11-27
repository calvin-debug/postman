# Postman

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.2.

## Project Overview

This is an Angular project that aims to fetch and display posts from an external API. 
The main tasks are divided into three stages, each with increasing complexity. 
This is more so an exercise for Angular implementation and not for the styling and 
HTML structure of the code. Thus, it's not necessary to spend too much time on the styling.

## Prerequisites
- Node.js and npm installed
- Angular CLI installed globally `npm install -g @angular/cli
- Basic knowledge of Angular

## Setup guide
1. Clone the repository
2. Run `npm install` to install the dependencies
3. Run `ng serve` to start the development server


## The development stages are as follows:

### Stage 1: Fetch and Display Posts

Objective: Fetch posts from the endpoint https://jsonplaceholder.typicode.com/posts and display them in a card-like component.

### Steps:

1. Change the routing element so that the index page is rerouted to the `/posts` route.
2. Open post.service.ts and implement the getPosts() method to fetch posts from the API.
3. In post-list.component.ts, call the getPosts() method from PostService and store the data.
4. Update post-list.component.html to display the fetched posts using Angular's structural directives (*ngFor).


Files to Work On:

- `src/app/services/post.service.ts`
- `src/app/components/post-list/post-list.component.ts`
- `src/app/components/post-list/post-list.component.html`

### Stage 2: Post Detail Page

Objective: Create a post detail page where the user can view the full details of a post including its comments.

### Steps:
1. Generate a new component using Angular's CLI with the path `/components/<component-name>/`
2. Update the `app-routing.module.ts` file to include a new route for the post detail page.
3. Implement the `getPostById()` method in the PostService to fetch a single post by its ID.
4. Implement the `getPostComments()` method in the PostService to fetch comments for a specific post. https://jsonplaceholder.typicode.com/posts/{postId}/comments

- `src/app/post.service.ts`
- `src/app/post-detail/post-detail.component.ts`
- `src/app/post-detail/post-detail.component.html`
- `src/app/app-routing.module.ts`

### Stage 3: Refresh Posts

Objective: Implement an interval-based refresh on the posts list page and/or a manual refresh button.
# postman
