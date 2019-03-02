import React, { Component } from 'react';
import './App.css';
import Calculator from './Calculator';

import { sumValueAction, subtractValueAction } from './actions';
import connect from './connect';

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

export default connect(
    state => {
        return {
            calculator: state.calculator,
        };
    },
    {
        sumValueAction,
        subtractValueAction,
    },
)(App);
