import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import PostsList from './components/PostsList';
// import PostDetail from './components/PostDetail';

function App() {
  return (
    <div>
      {/* Define the routes */}
      <Routes>
        {/* Reroute the root path to the posts list */}
        {/* <Route ... /> */}
        
        {/* Route for the posts list */}
        <Route path="/posts" element={<PostsList />} />
        
        {/* Create a post detail route, using a URL parameter ':id' */}
        {/* <Route ... /> */}
      </Routes>
    </div>
  );
}

export default App;
