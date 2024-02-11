import React from 'react';

/*
https://coder-chobo.tistory.com/18

*/

const students = [
    {   
        name: "Inje",
    },
    {
        name: "ENTP",
    },
    {
        name: "INTP",
    },
    {
        name: "ISTP"
    },

];

function ListAndKey(props) {
    return (
        <div>
            <ul>
                {students.map((student) => {
                    return <li>{student.name}</li>
                })}
            </ul>
        </div>
    );
}

export default ListAndKey;