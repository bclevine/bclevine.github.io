import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./pages/Home";
import Research from "./pages/Research";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "research", Component: Research },
    ],
  },
]);
