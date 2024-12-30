import React from 'react';
import Stack from './Stack.ts';
import Tower from './Tower.tsx';
class Towers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tower1: new Stack(),
            tower2: new Stack(),
            tower3: new Stack()
        };
      }

    startTowers = (n: Number) => {
        const first = new Stack();
        const second = new Stack();
        const third = new Stack();

        for (let i = n as number; i > 0; i--) {
            first.push(i);
        }
        console.log(first);
        this.setState({
            tower1: first,
            tower2: second,
            tower3: third
        });
    }


    render() {
        return <div>
            <div>
                <Tower stack={this.state.tower1}/>
                <Tower stack={this.state.tower2}/>
                <Tower stack={this.state.tower3}/>
            </div>
            <div>
                <input type="button" onClick={() => this.startTowers(3)} value="3" />
            </div>
        </div>;
    }
  }

export default Towers