import React from 'react';

// function PropsParent() {
  
//   const style = {
//     border: '2px solid black',
//     padding: '16px',
//   };

//   return (
//     <div style={style}>

//     </div>
//   )
// }

//props.children 는 자식에서 뭐가 넘어 올지 알수 없을때 쓰인다.
function PropsParent(props) {
  
  const style = {
    border: '2px solid black',
    padding: '16px',
  };

  return (
    <div style={style}>
      {props.children}  
    </div>
  )
}

export default PropsParent;