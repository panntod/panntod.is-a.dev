import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

const AboutPage = lazy(() => import("./pages/About"));
const HomePage = lazy(() => import("./pages/Home"));
const ProjectPage = lazy(() => import("./pages/Project"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/about",
    element: <AboutPage />
  },
  {
    path: "/projects",
    element: <ProjectPage />
  },
  {
    path: "*",
    element: <Navigate to="/" replace />
  }
]);

export default router;
