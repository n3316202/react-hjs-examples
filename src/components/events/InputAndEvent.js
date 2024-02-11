import React,{useState} from 'react';

/*
onChange
<input> <textarea> <select> 와 같은 폼(Form) 엘리먼트는 사용자의 입력값을 제어하는 데 사용

 input 상태 관리하기
 https://react.vlpt.us/basic/08-manage-input.html

*/
function InputAndEvent(props) {
    const [text, setText] = useState('');
    
    const handleChange = (e) => {
        setText(e.target.value);
    };
    
    const handleReset = () => {
        setText('');
    };


    return (
        <div>
            <h1>이벤트 연습(Input)</h1>
            <div>
                <input onChange={handleChange} value={text}/>
                <button onClick={handleReset}>초기화</button>
                <div>
                    <b>값:  {text}</b>
                </div>
                </div>
        </div>
    );
}

export default InputAndEvent;