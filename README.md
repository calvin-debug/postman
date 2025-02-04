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

1. Currently, the index page of this app does not have any component attached to it, but the `/posts` route is already set up. Change the routing element so that the index page is rerouted to the `/posts` route.
2. Open post.service.ts and implement the getPosts() method to fetch posts from the API.
3. In post-list.component.ts, call the getPosts() method from PostService to get the posts from the API.
4. Update post-list.component.html to display the fetched posts using Angular's structural directives (\*ngFor / @for).
5. Be mindful of lingering subscriptions and unsubscribing from them when the component unmounts.

Files to Work On:

- `src/app/app-routing.module.ts`
- `src/app/services/post.service.ts`
- `src/app/components/post-list/post-list.component.ts`
- `src/app/components/post-list/post-list.component.html`

### Stage 2: Post Detail Page

Objective: Create a post detail page where the user can view the full details of a post including its comments.

### Steps:

1. Generate a new component using Angular's CLI with the path `/components/<component-name>/`
2. Update the `app-routing.module.ts` file to include a new route for the post detail page and include the ID in the route as a parameter (e.g. `/posts/:id`).
3. Route to the post detail page when a post is clicked on the post list page.
4. Implement the `getPostById()` method in the PostService to fetch a single post by its ID.
5. Call the created detail function by piping the `id` from the activated route as a parameter.
6. Implement the `getPostComments()` method in the PostService to fetch comments for a specific post. https://jsonplaceholder.typicode.com/posts/${postId}/comments
7. Display the post details and the comments on the post detail page.
8. Display a number for each comment in the list corresponding to the comment's position (index) in the list.

- `src/app/post.service.ts`
- `src/app/post-detail/post-detail.component.ts`
- `src/app/post-detail/post-detail.component.html`
- `src/app/app-routing.module.ts`

### Stage 3: Post detail page visuals

Objective: Conditionally style the post detail page.

### Steps:

1. Style the post detail page comments so that every second commend has a blue background.
2. Give only the first comment a cool orange border using either inline styles or Angular's style/class binding.

### Stage 4: Refresh Posts (OPTIONAL)

Objective: Implement ways to refresh the posts list page.

### Steps:

1. Implement a refresh button that refetches and refreshes the posts list page when clicked.
2. Implement an interval-based refresh on the posts list page that automatically fetches new posts every 30 seconds.

### Stage 5: Filtering on search (OPTIONAL)

Objective: Implement a search feature that filters posts based on the search query.

### Steps:

1. Implement a search input field on the posts list page using Angular's reactive forms or two-way data binding with Signal
2. Filter posts by their title based on the search query entered by the user.
