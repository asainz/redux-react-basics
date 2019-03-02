import React, { Component } from 'react';

class Calculator extends Component {
    render() {
        const { handleSubtractClick, handleSumClick, calculator } = this.props;
        return (
            <React.Fragment>
                <h3>
                    Starting number: <strong>{calculator.initialValue}</strong>
                </h3>
                <h1>
                    Current sum: <strong>{calculator.currentValue}</strong>
                </h1>
                <h5>
                    This is the operation number <strong>{calculator.numberOfOperations}</strong>
                </h5>
                <div>
                    <button onClick={handleSumClick}>Sum a random number</button>
                </div>
                <div>
                    <button onClick={handleSubtractClick}>Subtract a random number</button>
                </div>
            </React.Fragment>
        );
    }
}

export default Calculator;
