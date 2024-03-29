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
import ToggleEvent from "../components/events/ToggleEvent"
import SyntheticEventEx from "../components/events/SyntheticEventEx";
import InputAndEvent from "../components/events/InputAndEvent";
import InputsAndEvent2 from './../components/events/InputsAndEvent2';
import SelectAndEvent3 from "../components/events/SelectAndEvent3";
import ListAndKey from "../components/listkey/ListAndKey";
import InputUseRef from './../components/refs/InputUseRef';
import UseRefExample from './../components/refs/UseRefExample';
import UsersProject from "../components/users/UsersProject";
import ThemeNotUseContextApp from "../components/contextapi/ThemeNotUseContextApp";
import PropsDrillingExample from "../components/contextapi/PropsDrillingExample";
import HelloUsingContext from "../components/contextapi/HelloUsingContext";

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
      },
      {
        path: "event-toggle",
        loader: () => "이벤트 예제 - 1",
        element: <ToggleEvent></ToggleEvent>,
      },
      {
        path: "event-sythentic",
        loader: () => "이벤트 예제 - 합성이벤트 2",
        element: <SyntheticEventEx></SyntheticEventEx>,
      },
      {
        path: "input-example",
        loader: () => "태그(Input)+이벤트 예제",
        element: <InputAndEvent></InputAndEvent>,
      },
      {
        path: "input-example2",
        loader: () => "태그(Input 여러개)+이벤트 예제",
        element: <InputsAndEvent2></InputsAndEvent2>,
      },
      {
        path: "select-example",
        loader: () => "태그(Select)+이벤트 예제",
        element: <SelectAndEvent3></SelectAndEvent3>,
      },
      {
        path: "list-key",
        loader: () => "리스트 키 예제",
        element: <ListAndKey></ListAndKey>,
      },
      {
        path: "input-ref",
        loader: () => "useRef 예제 - 1",
        element: <InputUseRef></InputUseRef>,
      },
      {
        path: "use-ref",
        loader: () => "useRef 예제 - 2",
        element: <UseRefExample></UseRefExample>,
      },
      {
        path: "project-users",
        loader: () => "유저 프로젝트",
        element: <UsersProject></UsersProject>,
      },
      {
        path: "contextapi-notuse",
        loader: () => "컨텍스트API - 기존 방법(컨텍스트 API 사용 안한 예제)",
        element: <ThemeNotUseContextApp></ThemeNotUseContextApp>,
      },
      {
        path: "props-drilling",
        loader: () => "컨텍스트API - 프롭스 드릴링",
        element: <PropsDrillingExample></PropsDrillingExample>,
      },
      ,
      {
        path: "contextapi-helloworld",
        loader: () => "컨텍스트API - 컨텍스트 API 사용 Hello World)",
        element: <HelloUsingContext></HelloUsingContext>,
      }     
    ],
  },
];
export default exampleRoutes;
