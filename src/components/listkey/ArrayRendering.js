import React from 'react';

function CreateUser({ username, email, onChange, onCreate }) {
    return (
      <div>
        <input
          name="username"
          placeholder="계정명"
          onChange={onChange}
          value={username}
        />
        <input
          name="email"
          placeholder="이메일"
          onChange={onChange}
          value={email}
        />
        <button onClick={onCreate}>등록</button>
      </div>
    );
  }


function ArrayRendering(props) {

    // const users = [ 
    //     {
    //       id: 1,
    //       username: 'velopert',
    //       email: 'public.velopert@gmail.com'
    //     },
    //     {
    //       id: 2,
    //       username: 'tester',
    //       email: 'tester@example.com'
    //     },
    //     {
    //       id: 3,
    //       username: 'liz',
    //       email: 'liz@example.com'
    //     }
    //   ];

    return (
        <>
            <CreateUser></CreateUser>   
        </>
    );
}

export default ArrayRendering;