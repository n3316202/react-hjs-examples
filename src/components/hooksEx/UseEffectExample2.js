import {useEffect, useState} from "react";

function UseEffectExample2() {
    
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
      console.log("화면 렌더링(화면에 나타남) 됨. (마운트)");
  
      return () => {
        console.log("cleanup(화면에서 사라짐 (언마운트)");
      }
    })
  
    const onClick = () => {
      setToggle(prev => !prev);
      console.log(`toggle : ${toggle}`)
    }
  
    return (
      <div>
        <h1>Hello</h1>
        <button type="button" class="btn btn-primary" onClick={onClick}>리렌더링 버튼</button>
      </div>
    );
}

export default UseEffectExample2;