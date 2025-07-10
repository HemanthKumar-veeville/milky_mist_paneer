import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/ui/Layout";
import { Screen } from "./screens/Screen/Screen";
import { GameIntro } from "./screens/Game";
import { Play } from "./screens/Play";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Screen />,
      },
      {
        path: "/game/:character",
        element: <GameIntro />,
      },
      {
        path: "/play",
        element: <Play />,
      },
    ],
  },
]);

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
