import React from 'react';
import Stack from './Stack.ts';
import Tower from './Tower.tsx';
class Towers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tower1: new Stack("tower1"),
            tower2: new Stack("tower2"),
            tower3: new Stack("tower3")
        };
      }

    startTowers = (n: number) => {
        const first = new Stack("tower1");
        const second = new Stack("tower2");
        const third = new Stack("tower3");

        for (let i = n; i > 0; i--) {
            first.push(i);
        }
        this.setState({
            tower1: first,
            tower2: second,
            tower3: third
        }, () => this.beginSolveTowers(n));
    }

    async beginSolveTowers(n: number)
    {
        await this.delay();
        this.solveTowers(n, this.state.tower1, this.state.tower3, this.state.tower2)
    }

    async solveTowers(n: number, from: Stack, to: Stack, auxilliary: Stack) {
        if (n as number <= 0)
        {
            return;
        }
        await this.solveTowers(n - 1, from, auxilliary, to);

        to.push(from.pop() ?? 0);
        let newState = {};
        newState[from.getName()] = from;
        newState[to.getName()] = to;
        newState[auxilliary.getName()] = auxilliary;
        await this.setState(newState);

        await this.delay();

        await this.solveTowers(n - 1, auxilliary, to, from);
    }

    delay() {
        return new Promise( resolve => setTimeout(resolve, 1000) );
    }


    render() {
        return <div className="container">
            <div className="row">
                <Tower stack={this.state.tower1}/>
                <Tower stack={this.state.tower2}/>
                <Tower stack={this.state.tower3}/>
            </div>
            <div className="row">
                <input type="button" onClick={() => this.startTowers(3)} value="3" />
            </div>
        </div>;
    }
  }

export default Towers