import App from "../App";
import Greeting from "../components/props/Greeting1";
import HelloWorld from "../components/jsxEx/HelloWorld";
import GreetingColor from "../components/props/GreetingColor2";
import DefaultProps from "../components/props/DefaultProps3";
import PropsParent from "../components/props/PropsParent4";
import {ConditionalRenderingExample,ConditionalRenderingWithTernary } from "../components/conditionalRendering/ConditionalRenderingExample";
import BasicCounterExample from "../components/hooksEx/BasicCounterExample";
import CouterExample from "../components/understandState/CounterExample";
import UseEffectExample from "../components/hooksEx/UseEffectExample";
import UseEffectExample2 from "../components/hooksEx/UseEffectExample2";
import UseEffectExample3 from "../components/hooksEx/UseEffectExample3";
import UseMemoExample4 from "../components/hooksEx/UseMemoExample4";
import UseMemoExample5 from "../components/hooksEx/UseMemoExample5";

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
        element: <CouterExample>
        </CouterExample>,
      },
      {
        path: "hook-useState",
        loader: () => "Hook의 이해-useState-1",
        element: <BasicCounterExample>
        </BasicCounterExample>,
      },
      {
        path: "hook-useEffectiv",
        loader: () => "Hook의 이해-useEffective-1",
        element: <UseEffectExample>
        </UseEffectExample>,
      },
      {
        path: "hook-useEffect2",
        loader: () => "Hook의 이해-useEffect-2",
        element: <UseEffectExample2>
        </UseEffectExample2>,
      },
      {
        path: "hook-useEffect3",
        loader: () => "Hook의 이해-useEffect-3",
        element: <UseEffectExample3></UseEffectExample3>,
      },
      {
        path: "hook-useMemo1",
        loader: () => "Hook의 이해-useMemo-1",
        element: <UseMemoExample4></UseMemoExample4>,
      },
      {
        path: "hook-useMemo2",
        loader: () => "Hook의 이해-useMemo-2",
        element: <UseMemoExample5></UseMemoExample5>,
      }     
    ],
  },
];
export default exampleRoutes;
