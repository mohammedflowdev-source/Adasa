import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import BlogPage from "./Pages/BlogPage";
import PostDetail from "./Pages/PostDetail";
import About from "./Pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "blog",
        element: <BlogPage />,
      },
      {
        path: "blog/:slug",
        element: <PostDetail />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
