import React, { Component } from 'react';
import './App.css';
import Calculator from './Calculator';

import store from './store';

import { bindActionCreators } from 'redux';

import { sumValueAction, subtractValueAction } from './actions';

class App extends Component {
    constructor(props) {
        super(props);

        this.handleSubtractClick = this.handleSubtractClick.bind(this);
        this.handleSumClick = this.handleSumClick.bind(this);
    }

    handleSumClick() {
        this.props.sumValueAction();
    }
    handleSubtractClick() {
        this.props.subtractValueAction();
    }

    render() {
        const { calculator } = this.props;
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

const boundActions = bindActionCreators(
    {
        sumValueAction,
        subtractValueAction,
    },
    store.dispatch,
);

class AppWrapper extends Component {
    constructor(props) {
        super(props);

        store.subscribe(() => {
            this.forceUpdate();
        });
    }
    render() {
        const calculator = store.getState().calculator;
        return <App {...boundActions} calculator={calculator} />;
    }
}

export default AppWrapper;
