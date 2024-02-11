import { useState } from "react";
function Toggle(props){

	const [isToggleOn, setIsToggleOn] = useState(true);
  	
  	//방법 1. 함수안에 함수로 정의
  	function handleClick() {
    	setIsToggleOn((isToggleOn) => !isToggleOn);
    }

    //방법 2. arrow function을 사용하여 정의
  	// const handleClick = () => {
    // 	setIsToggleOn((isToggleOn) => !isToggleOn);
    // }
    
    return (
        <>        
            <button onClick={handleClick}>
                {isToggleOn? "켜짐":"꺼짐"}
            </button>
            <hr></hr>
            <button onClick={ () => {
    	                        setIsToggleOn((isToggleOn) => !isToggleOn);}
            }>
                {isToggleOn? "켜짐":"꺼짐"}
            </button>
        </>
    );
}

export default Toggle

// class Toggle extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {isToggleOn: true};
  
//       // 콜백에서 `this`가 작동하려면 아래와 같이 바인딩 해주어야 합니다.
//       this.handleClick = this.handleClick.bind(this);
//     }
  
//     handleClick() {
//       this.setState(prevState => ({
//         isToggleOn: !prevState.isToggleOn
//       }));
//     }
  
//     render() {
//       return (
//         <button onClick={this.handleClick}>
//           {this.state.isToggleOn ? 'ON' : 'OFF'}
//         </button>
//       );
//     }
//   }