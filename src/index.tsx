import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/ui/Layout";
import { Screen } from "./screens/Screen/Screen";
import { GameIntro } from "./screens/Game";
import { Play } from "./screens/Play";
import { FinalYogurt } from "./screens/Result";

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
        path: "/game",
        element: <GameIntro />,
      },
      {
        path: "/play",
        element: <Play />,
      },
      {
        path: "/result",
        element: <FinalYogurt />,
      },
    ],
  },
]);

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
