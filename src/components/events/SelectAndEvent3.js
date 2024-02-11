import React, { useState } from 'react'; // eslint-disable-next-line

/*

https://wazacs.tistory.com/31
셀렉트를 사용하기 위해 다음과 같이 jsx 구문을 만들었습니다.

<select className="w150" onChange={handleChangeSelect}>
  <option value="1" >0.1톤</option>
  <option value="2">0.2톤</option>
  <option value="3">0.3톤</option>
  <option value="4" selected={true}>0.4톤</option> 
  <option value="5">0.5톤</option>
</select>

위와 같이 하면 에러가남

React에서는 selected 대신 value를 사용합니다. 

*/
function SelectAndEvent3(props) {

  const selectList = ["apple", "banana", "grape", "orange"];
  const [Selected, setSelected] = useState("");

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div className="App">
      <h1>Select in React</h1>
      <div>
        <select onChange={handleSelect} value={Selected}>
          {selectList.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        <hr />
        <p>
          Selected: <b>{Selected}</b>
        </p>
      </div>
    </div>
  );

 
}

export default SelectAndEvent3;

