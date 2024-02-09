import App from "../App";
import Greeting from "../components/props/Greeting1";
import HelloWorld from "../components/jsxEx/HelloWorld";
import GreetingColor from "../components/props/GreetingColor2";
import DefaultProps from "../components/props/DefaultProps3";
import PropsParent from "../components/props/PropsParent4";
import {ConditionalRenderingExample,ConditionalRenderingWithTernary } from "../components/conditionalRendering/ConditionalRenderingExample";
import PlusOneExample from "../components/understandState/PlusOneExample";

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
        element: <Greeting name="홍길동"></Greeting>,
      },
      {
        path: "greeting-color",
        loader: () => "jsx-프롭스예제-파라미터-두개이상",
        element: <GreetingColor name="홍길동" color="blue"></GreetingColor>,
      },
      {
        path: "default-props",
        loader: () => "jsx-프롭스예제-디폴트-프롭스",
        element: <DefaultProps></DefaultProps>,
      },
      {
        path: "props-child",
        loader: () => "jsx-프롭스예제-프롭스-차일드",
        element: <PropsParent>
          <div>안녕하세요</div>
        </PropsParent>,
      },
      {
        path: "conditional-rendering",
        loader: () => "조건부-랜더링",
        element: 
        <>
          <ConditionalRenderingExample isLoggedIn={true} >
            <div>안녕하세요</div>
          </ConditionalRenderingExample>
          <hr></hr>
          <ConditionalRenderingWithTernary   >
            <div>안녕하세요</div>
          </ConditionalRenderingWithTernary>
        </>,
      },
      {
        path: "understanding-state",
        loader: () => "State의 이해 - 1",
        element: <PlusOneExample>
        </PlusOneExample>,
      } 

    ],
  },
];
export default exampleRoutes;
