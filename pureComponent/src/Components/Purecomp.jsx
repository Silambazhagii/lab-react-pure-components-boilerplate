import React, { PureComponent } from 'react';
import '../app.css';

class Purecomp extends  PureComponent{
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            toggle: true,
        };
    }

    change = () => {
        if (this.state.toggle) {
            this.setState((prevState) => ({
                count: prevState.count + 1,
            }));
        }
    };

    toggle = () => {
        this.setState((prevState) => ({
            toggle: !prevState.toggle,
        }));
    };

    render() {
        return (
            <div className="PureComponent">
                <h1>Pure Component</h1>
                <div className="counter">{this.state.count}</div>
                <button onClick={this.toggle}>Set toggle</button>
                <button onClick={this.change}>Counter</button>
            </div>
        );
    }
}

export default Purecomp;
