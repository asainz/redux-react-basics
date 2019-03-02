import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.handleSubtractClick = this.handleSubtractClick.bind(this);
        this.handleSumClick = this.handleSumClick.bind(this);
    }

    handleSumClick() {}
    handleSubtractClick() {}

    render() {
        return (
            <div className="App">
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
            </div>
        );
    }
}

export default App;
