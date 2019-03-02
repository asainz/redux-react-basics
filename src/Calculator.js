import React, { Component } from 'react';

class Calculator extends Component {
    constructor(props) {
        super(props);

        this.handleSubtractClick = this.handleSubtractClick.bind(this);
        this.handleSumClick = this.handleSumClick.bind(this);
    }

    handleSumClick() {
        window.console.log('sum a random number');
    }
    handleSubtractClick() {
        window.console.log('subtract a random number');
    }

    render() {
        return (
            <React.Fragment>
                <h3>
                    Starting number: <strong>1000</strong>
                </h3>
                <h1>
                    Current sum: <strong>1000</strong>
                </h1>
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
