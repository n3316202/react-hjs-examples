import {useEffect, useState} from "react";

function UseEffectExample3() {
    
    const [toggle, setToggle] = useState(false);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
      console.log("화면 렌더링(화면에 나타남) 됨. (마운트)");
  
      return () => {
        console.log("cleanup(화면에서 사라짐) (언마운트)");
      }
    })

    const handleClick = () => {
      setVisible(!visible);
    };

    useEffect(() => {
      console.log(' visible 업데이트!');
  
      return () => {
        console.log(`현재 visible 값: ${visible}`);
        console.log('visible이 곧 업데이트 됩니다!');
      };
    }, [visible]);
  
    const onClick = () => {
      setToggle(prev => !prev);
      console.log(`toggle : ${toggle}`)
    }
  
    return (
      <div>
        <h1>Hello</h1>
        <button type="button" class="btn btn-primary" onClick={onClick}>리렌더링 버튼</button>
        <button type="button" class="btn btn-primary" onClick={handleClick}> visible 변수 : {visible}</button>
      </div>
    );
}

export default UseEffectExample3;