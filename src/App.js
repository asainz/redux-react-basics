import React, { Component } from 'react';
import './App.css';
import Calculator from './Calculator';

import store from './store';

import { bindActionCreators } from 'redux';

import { sumValueAction, subtractValueAction } from './actions';

const boundActions = bindActionCreators(
    {
        sumValueAction,
        subtractValueAction,
    },
    store.dispatch,
);

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
        boundActions.sumValueAction();
    }
    handleSubtractClick() {
        boundActions.subtractValueAction();
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
