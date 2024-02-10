import {useEffect} from "react";

function UseEffectExample() {
    
    useEffect(() => {
        console.log("화면 렌더링 됨.");
      })

    return (
        <div>
            <h1>Hello</h1>
        </div>
    );
}

export default UseEffectExample;