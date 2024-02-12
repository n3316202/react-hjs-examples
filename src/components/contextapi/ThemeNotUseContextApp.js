import React from 'react';

/*
https://velog.io/@mjieun/React-Context
*/

function Toolbar(props) {
    // 이 Toolbar 컴포넌트는 ThemeButton에 theme를 넘겨주기 위해서 'theme' prop을 가져야만 함
    // 현재 테마를 알아야하는 모든 버튼에 대해서 props로 전달하는 것은 굉장히 비효율적
    return (
        <div>
            <ThemeButton theme={props.theme} />
        </div>
    );
}

function ThemeButton(props) {
    return <button theme={props.theme} />;
}

function ThemeNotUseContextApp(props) {
    return <Toolbar theme="dark" />
}

export default ThemeNotUseContextApp;