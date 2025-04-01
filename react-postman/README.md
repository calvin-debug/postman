# Project Overview

This is a React project that aims to fetch and display posts from an external API.
The main tasks are divided into three stages, each with increasing complexity.
This is more so an exercise for React implementation and not for the styling and
HTML structure of the code. Thus, it's not necessary to spend too much time on the styling.

### Note

The stages below should be increasing in difficulty with some exceptions. There are
easier and more difficult ways to solve each stage. If you find a step or a stage too difficult,
feel free to skip it and move on to the next one. The goal is not to complete all the stages but to
display your understanding of React and its concepts.

## Prerequisites

- Node.js and npm (or yarn) installed
- Some knowledge of React, React Router, and asynchronous JavaScript (fetch API, Promises, async/await).

## Setup guide

1. Clone the repository
2. Run `npm install` (or `yarn install`) to install the dependencies
3. Run `npm start` (or `yarn start`) to start the development server. The app will be available at `http://localhost:3000`.

## The development stages are as follows:

### Stage 1: Fetch and Display Posts

Objective: Fetch posts from the endpoint https://jsonplaceholder.typicode.com/posts and display them in a list format.

### Steps:

1. Currently, the index page (`/`) leads to an empty page. Update `src/App.tsx` to ensure the root path `/` redirects or directly renders the posts list (`/posts`) route.
2. Open `src/components/PostsList.tsx` and implement the logic inside a `useEffect` hook to fetch posts from the API endpoint `https://jsonplaceholder.typicode.com/posts` when the component mounts. Store the fetched posts in the component's state.
3. Correctly type the posts state variable based on the data returned from the API.
4. Update the JSX in `src/components/PostsList.tsx` to display the fetched posts in a list. Styling is not overly important at this stage, but give each post some padding, margin and a nice border

Files to Work On:

- `src/App.tsx`
- `src/components/PostsList.tsx`

### Stage 2: Post Detail Page

Objective: Create a post detail page where the user can view the full details of a post including its comments.

### Steps:

1. Create a new component file `src/components/PostDetail.tsx`.
2. Update the `src/App.tsx` file to include a route for the post detail page. This route should accept a post ID as a URL parameter.
3. In `src/components/PostsList.tsx`, make each post clickable. When a post is clicked, navigate the user to the corresponding post detail page using `useNavigate`.
4. In `src/components/PostDetail.tsx`, get the post ID from the URL and use it to fetch post details from the API.
5. Implement logic in `PostDetail.tsx` to fetch the specific post's details and its comments using its ID. The endpoints are `https://jsonplaceholder.typicode.com/posts/${id}` and `https://jsonplaceholder.typicode.com/posts/${postId}/comments`. Store the post data in state using `useState`.
6. Create a new interface `PostWithComments` that has a property `comments` of type `Comment[]` in addition to the existing `Post` interface.
7. Consider fetching both post details and comments concurrently.
8. Display the post details (title, body) and the fetched comments (author/email, body) in `PostDetail.tsx`.
9. Display a number for each comment in the list corresponding to the comment's position (index) in the mapped array.

Files to Work On:

- `src/App.tsx`
- `src/components/PostsList.tsx`
- `src/components/PostDetail.tsx`

### Stage 3: Post detail page visuals

Objective: Conditionally style the post detail page comments. All styles will be added inline and no classes should be used for this exercise.

### Steps:

1. In `src/components/PostDetail.tsx`, style the comments list so that every 2nd comment has a distinct background color (e.g., light blue).
2. Give only the first comment a unique border (e.g., a cool orange border).
3. Give the last 2nd to last comment a unique background color (e.g., light green).

Files to Work On:

- `src/components/PostDetail.tsx`

### Stage 4: Refresh Posts (OPTIONAL)

Objective: Implement ways to refresh the posts list page.

### Steps:

1. In `src/components/PostsList.tsx`, implement a refresh button. When clicked, this button should trigger a refetch of the posts list from the API and update the component's state. Validate that the network request is made when the button is clicked.
2. Implement an interval-based refresh on the posts list page. Use `useEffect` and `setInterval` to automatically fetch new posts every 30 seconds. Remember to clear the interval in the `useEffect` cleanup function to prevent memory leaks when the component unmounts.

Files to Work On:

- `src/components/PostsList.tsx`

### Stage 5: Filtering on search (OPTIONAL)

Objective: Implement a search feature that filters posts based on the search query.

### Steps:

1. Implement a search input field on the posts list page (`src/components/PostsList.tsx`). Use the `useState` hook to manage the state of the search query input.
2. Filter the displayed posts by their title based on the search query entered by the user. The filtering logic should run whenever the search query or the original posts list changes. Consider using a separate `useState` variable to hold the filtered posts and update it using a `useEffect` hook that depends on the search query and the original posts list.

Files to Work On:

- `src/components/PostsList.tsx`
