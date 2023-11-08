import { Suspense, lazy } from "react";
import type { RouteObject } from "react-router";

import LoadingScreen from "./components/common/LoadingScreen";
import MainLayout from "./components/layout/MainLayout";

const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

//  * HOME PAGE
const Home = Loadable(lazy(() => import("./pages/home/Home")));

//  * Error PAGE
const ErrorPage = Loadable(lazy(() => import("./pages/error-page")));

//  * Photoes PAGE
const Photos = Loadable(lazy(() => import("./pages/photoes/Photos")));

const routes: RouteObject[] = [
  // {
  //   path: "authentication",
  //   children: [
  //     {
  //       path: "login",
  //       element: <Login />,
  //     },
  //     {
  //       path: "register",
  //       element: <Register />,
  //     },
  //   ],
  // },
  {
    path: "*",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "photos",
        element: <Photos />,
      },
    ],
  },
];

export default routes;
