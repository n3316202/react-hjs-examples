import React from 'react';
import { createContext, useContext } from 'react';

/*
https://despiteallthat.tistory.com/184
*/

//Context는 리액트 패키지에서 createContext라는 함수를 불러와서 만들 수 있습니다.
const MyContext = createContext();

//Context 객체 안에는 Provider라는 컴포넌트가 들어있습니다. 
//그리고, 그 컴포넌트 간에 공유하고자 하는 값을 value라는 Props로 설정하면 자식 컴포넌트들에서 해당 값에 바로 접근을 할 수 있습니다.

function HelloUsingContext(props) {
  return (
    <MyContext.Provider value="Hello World">
      <GrandParent />
    </MyContext.Provider>
  );
}

function GrandParent() {
  return <Parent />;
}
 
function Parent() {
  return <Child />;
}
 
function Child() {
  return <GrandChild />;
}
 
function GrandChild() {
  return <Message />;
}

//이렇게 하면, 원하는 컴포넌트에서 useContext라는 Hook를 사용하여 
//Context에 넣은 값에 바로 접근할 수 있습니다. 
//해당 Hook의 인자에는 createContext로 만든 MyContext를 넣습니다. 

function Message() {
  const value = useContext(MyContext);
  return <div>Received: {value}</div>;
}

export default HelloUsingContext;