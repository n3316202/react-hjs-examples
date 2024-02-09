import React from 'react';

class PlusOneExample extends React.Component {
    
    //state 는 반드시 set 함수로만 접근 할수 있음
    state = {
      count: 0,
    };
  
    countUpdate(n) {

      this.setState({
        count: n,
      });
    }

    render() {
      const { count } = this.state;
      return (
        <div>
          <div>
            <h1>{count}</h1>
            <button
              onClick={() => {
                this.countUpdate(count + 1);
              }}
            >
              증가
            </button>
          </div>
        </div>
      );
    }
  }

export default PlusOneExample