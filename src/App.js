import React, { Component } from 'react';
import './App.css';
import Calculator from './Calculator';

import store from './store';
import rand from './rand';

class App extends Component {
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
        const calculator = store.getState().calculator;
        return (
            <div className="App">
                <Calculator
                    handleSumClick={this.handleSumClick}
                    handleSubtractClick={this.handleSubtractClick}
                    calculator={calculator}
                />
            </div>
        );
    }
}

export default App;
