import React from 'react';



// React에서 조건부 렌더링은 특정 조건에 따라 컴포넌트의 일부 또는 전체를 렌더링하는 기술을 말합니다. 
// 이것은 상태(State)나 프로퍼티(Props) 값 등의 여러 요인을 기반으로 하여 UI를 동적으로 결정

//1.조건문을 사용한 렌더링:

const ConditionalRenderingExample  = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return <p>Welcome, User!</p>;
  } else {
    return <p>Please log in.</p>;
  }
}

//2.삼항 연산자를 사용한 렌더링:
const ConditionalRenderingWithTernary = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn ? (
        <p>Welcome, User!</p>
      ) : (
        <p>Please log in.</p>
      )}
    </div>
  );
}

//3.논리 연산자를 사용한 렌더링:

const ConditionalRenderingWithLogicalOperators = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn && <p>Welcome, User!</p>}
      {!isLoggedIn && <p>Please log in.</p>}
    </div>
  );
}


export { ConditionalRenderingWithTernary,ConditionalRenderingExample,ConditionalRenderingWithLogicalOperators}

