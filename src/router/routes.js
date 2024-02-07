import App from "../App";
import Greeting from "../components/jsxEx/Greeting";
import HelloWorld from "../components/jsxEx/HelloWorld";


const exampleRoutes = [
  {
    path: "/",
    element: <App />,
    loader: () => "Example",
    children: [
      {
        path: "hello",
        loader: () => "헬로월드",
        element: <HelloWorld/>,
      },
      {
        path: "greeting",
        loader: () => "jsx-프롭스예제",
        element: <Greeting></Greeting>,
      },
    ],
  },
];
export default exampleRoutes;
