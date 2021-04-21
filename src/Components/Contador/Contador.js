import React, { Component } from 'react';
import './Contador.css';
import { Button } from 'semantic-ui-react';

export default class Contador extends Component {
    constructor() {
        super()

        this.state = {
            count: 0,
        };
    }
   
    handleIncrement = () => {
        this.setState ({count: this.state.count + 1})
    };

    handleDecrease = () => {
        this.setState ({count: this.state.count - 1})
    };


    render() {
        return (
            <div className="Contador-container">
                <div className="Buttons-container">
                    <Button secondary onClick={this.handleDecrease}>-</Button>
                     </div>
                <p>{this.state.count}</p>
                    <div className="Buttons-container">
                    <Button primary onClick={this.handleIncrement}>+</Button>
                     </div>
            </div>
        )
    }
}
