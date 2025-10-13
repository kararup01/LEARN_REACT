import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './route/App.jsx'
import CreatePost, { createPostAction } from './component/CreatePost.jsx';
import PostList, { PostLoder } from './component/PostList.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {path: "/", element: <PostList/>, loader: PostLoder},
      {path: "/create-post", element: <CreatePost/>, action: createPostAction},
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
