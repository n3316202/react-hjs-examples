import App from "../App";

const exampleRoutes = [
  {
    path: "/",
    element: <App />,
    loader: () => "Example",
    children: [
      {
        path: "home",
        loader: () => "home",
        element: <div>홈입니다.</div>,
      },
      {
        path: "user/:userId",
        loader: () => "user",
        element: <div>사용자 상세 페이지입니다.</div>,
      },
    ],
  },
];
export default exampleRoutes;
