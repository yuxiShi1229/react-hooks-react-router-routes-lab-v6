// src/routes.js
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import ErrorPage from "./pages/ErrorPage";
import Actors from "./pages/Actors";
import Directors from "./pages/Directors";
import Movie from "./pages/Movie";

const routes = [
  { path: "/", element: <Home />, errorElement: <ErrorPage /> },
  { path: "/about", element: <About />, errorElement: <ErrorPage /> },
  { path: "/login", element: <Login />, errorElement: <ErrorPage /> },
  { path: "/profile/:id", element: <UserProfile />, errorElement: <ErrorPage /> },
  { path: "/actors", element: <Actors />, errorElement: <ErrorPage /> },
  { path: "/directors", element: <Directors />, errorElement: <ErrorPage /> },
  { path: "/movie/:id", element: <Movie />, errorElement: <ErrorPage /> },
  { path: "*", element: <ErrorPage /> },
];

export default routes;
