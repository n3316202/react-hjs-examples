import {useMemo} from "react";

/* 
  vue 에서는 computed
  react 에서는 useMemo가 있음.

*/
function UseMemoExample4() {
    
  const myName = "yoy"
    
	const computedName = useMemo(()=>{
            return myName.split('').reverse().join('');
        },[myName])
    
    return <div> { computedName } </div>
}

export default UseMemoExample4;