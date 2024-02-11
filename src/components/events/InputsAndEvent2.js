import React, { useState } from 'react'; // eslint-disable-next-line

/*
https://contentstoaster.tistory.com/entry/react-event-handler

https://react.vlpt.us/basic/09-multiple-inputs.html

input 의 개수가 여러개가 됐을때는, 
단순히 useState 를 여러번 사용하고 onChange 도 여러개 만들어서 구현 할 수 있습니다. 
하지만 그 방법은 가장 좋은 방법은 아닙니다. 더 좋은 방법은, input 에 name 을 설정하고 이벤트가 발생했을 때 이 값을 참조하는 것입니다. 그리고, useState 에서는 문자열이 아니라 객체 형태의 상태를 관리해주어야 합니다.

지금은 이것만 기억하세요. 리액트에서 객체를 업데이트하게 될 때에는 기존 객체를 직접 수정하면 안되고, 
새로운 객체를 만들어서, 새 객체에 변화를 주어야 됩니다.

*/
function InputsAndEvent2(props) {

    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
      });
    
      const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출
    
      const handleChange = (e) => {
        const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
        
        setInputs({
          ...inputs, // 기존의 input 객체를 복사한 뒤
          [name]: value // name 키를 가진 값을 value 로 설정 //계산된 속성명(computed property name)에 따른 구문입니다.
        });

      };
    
      const handleReset = () => {
        setInputs({
          name: '',
          nickname: '',
        })
      };
    
    
      return (
        <div>
          <input name="name" placeholder="이름" onChange={handleChange} value={name} />
          <input name="nickname" placeholder="닉네임" onChange={handleChange} value={nickname}/>
          <button onClick={handleReset}>초기화</button>
          <div>
            <b>값: </b>
            {name} ({nickname})
          </div>
        </div>
      );
 
}

export default InputsAndEvent2;

// 계산된 속성 이름(computed property name)
// 마지막으로, ES6부터 계산된 속성 이름을 사용할 수 있다. 객체 리터럴에서 키를 중괄호([])로 감쌀 경우 해당 표현식이 계산된 값을 속성 이름으로 사용한다. 이 때 중괄호 안에는 모든 표현식이 들어갈 수 있다.

// const name = 'heejong';
// const obj = { [name]: 'ahn' };
// console.log(obj); // { heejong: 'ahn' }
// const obj3 = { ['ab' + 'c']: 3 };
// console.log(obj3); // { abc: 3 }