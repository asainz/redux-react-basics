import React, { Component } from 'react';
import './App.css';
import Calculator from './Calculator';

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
                <Calculator />
            </div>
        );
    }
}

export default App;
