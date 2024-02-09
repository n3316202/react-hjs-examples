import React, { useState } from 'react';

function BasicCounterExample() {
    
    const [count,setCount] = useState(0)

    return (
        <div>
            <h3>총{count}번 클릭했습니다.</h3>
            <button type="button" class="btn btn-primary" onClick={()=>setCount(count + 1)}>증가</button>
        </div>
    );
}

export default BasicCounterExample;