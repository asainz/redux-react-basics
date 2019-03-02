import React, { Component } from 'react';

import store from './store';
import rand from './rand';

class Calculator extends Component {
    constructor(props) {
        super(props);

        this.handleSubtractClick = this.handleSubtractClick.bind(this);
        this.handleSumClick = this.handleSumClick.bind(this);

        store.subscribe(() => {
            window.console.log('state', store.getState().calculator);
            this.forceUpdate();
        });
    }

    handleSumClick() {
        store.dispatch({
            type: 'SUM',
            value: rand(1, 100),
        });
    }
    handleSubtractClick() {
        store.dispatch({
            type: 'SUBTRACT',
            value: rand(1, 100),
        });
    }

    render() {
        const state = store.getState().calculator;
        return (
            <React.Fragment>
                <h3>
                    Starting number: <strong>{state.initialValue}</strong>
                </h3>
                <h1>
                    Current sum: <strong>{state.currentValue}</strong>
                </h1>
                <h5>
                    This is the operation number <strong>{state.numberOfOperations}</strong>
                </h5>
                <div>
                    <button onClick={this.handleSumClick}>Sum a random number</button>
                </div>
                <div>
                    <button onClick={this.handleSubtractClick}>Subtract a random number</button>
                </div>
            </React.Fragment>
        );
    }
}

export default Calculator;
