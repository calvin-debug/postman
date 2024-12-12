## Project Overview

This is an Angular project that aims to fetch and display posts from an external API. 
The main tasks are divided into three stages, each with increasing complexity. 
This is more so an exercise for Angular implementation and not for the styling and 
HTML structure of the code. Thus, it's not necessary to spend too much time on the styling.

### Note
The stages below should be increasing in difficulty with some exceptions. There are
easier and more difficult ways to solve each stage. If you find a step or a stage too difficult,
feel free to skip it and move on to the next one. The goal is not to complete all the stages but to
display your understanding of Angular and its concepts.

## Prerequisites
- Node.js and npm installed
- Angular CLI installed globally `npm install -g @angular/cli
- Some knowledge of Angular.

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
3. In post-list.component.ts, call the getPosts() method from PostService to display a list of posts in the list page.
4. Update post-list.component.html to display the fetched posts using Angular's structural directives (*ngFor / @for).
   - If possible, display the posts directly in the post-list component without saving them into a variable in the script.


Files to Work On:

- `src/app/app-routing.module.ts`
- `src/app/services/post.service.ts`
- `src/app/components/post-list/post-list.component.ts`
- `src/app/components/post-list/post-list.component.html`

### Stage 2: Post Detail Page

Objective: Create a post detail page where the user can view the full details of a post including its comments.

### Steps:
1. Generate a new component using Angular's CLI with the path `/components/<component-name>/`
2. Update the `app-routing.module.ts` file to include a new route for the post detail page.
3. Route to the post detail page when a post is clicked on the post list page.
4. Implement the `getPostById()` method in the PostService to fetch a single post by its ID using the ID from the query params.
5. Implement the `getPostComments()` method in the PostService to fetch comments for a specific post. https://jsonplaceholder.typicode.com/posts/${postId}/comments
6. Display the post details and the comments on the post detail page.
  - If possible, display the post details and comments directly in the post detail component without saving them into a variable in the script.
7. Display an index number for each comment in the list corresponding to the comment's position in the list.

- `src/app/post.service.ts`
- `src/app/post-detail/post-detail.component.ts`
- `src/app/post-detail/post-detail.component.html`
- `src/app/app-routing.module.ts`

### Stage 3: Post detail page visuals

Objective: Conditionally style the post detail page.

### Steps:
1. Style the post detail page comments so that every second commend has a blue background.
2. Give only the first comment a cool orange border.

### Stage 4: Refresh Posts (OPTIONAL)

Objective: Implement ways to refresh the posts list page.

### Steps:
1. Implement a manual refresh button on the posts list page where the posts are refetched when the button is clicked.
2. Implement an interval-based refresh on the posts list page that automatically fetches new posts every 30 seconds.


### Stage 5: Filtering on search (OPTIONAL)

Objective: Implement a search feature that filters posts based on the search query.

### Steps:
1. Implement a search input field on the posts list page using Angular's reactive forms.
2. Filter posts by their title based on the search query entered by the user.
