import React, { useRef } from 'react';

/*
https://velog.io/@kungsboy/React%EB%A6%AC%EC%95%A1%ED%8A%B8-10-useRef-%EC%9D%98-%EC%9D%B4%ED%95%B4


*/
const InputUseRef = () => {
    
  const nameInput = useRef(); // Ref 객체 생성
  
  const handleReset = () => {
    //nameInput.current.focus(); // nameInput 으로 설정된 ref 값의 current 로 포커스 이동
  };

  return (
    <div>
      <input
        ref={nameInput} // ref 지정
      />
      <button onClick={handleReset}>초기화(버튼 클릭시 함수 실행)</button> 
      <div>
        <b>값: </b>
        {/* {name}({nickname}) */}
      </div>
    </div>
  );
};
export default InputUseRef;