import React from 'react';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <section className="calculator-container">
                <div className="display">0</div>
                <div className="list-btn">
                    <button className="list-btn-item" type="button">AC</button>
                    <button className="list-btn-item" type="button">+/-</button>
                    <button className="list-btn-item" type="button">%</button>
                    <button className="list-btn-item operator" type="button">÷</button>
                </div>
                <div className="list-btn">
                    <button className="list-btn-item" type="button">7</button>
                    <button className="list-btn-item" type="button">8</button>
                    <button className="list-btn-item" type="button">9</button>
                    <button className="list-btn-item operator" type="button">x</button>
                </div>
                <div className="list-btn">
                    <button className="list-btn-item" type="button">4</button>
                    <button className="list-btn-item" type="button">5</button>
                    <button className="list-btn-item" type="button">6</button>
                    <button className="list-btn-item operator" type="button">-</button>
                </div>
                <div className="list-btn">
                    <button className="list-btn-item" type="button">1</button>
                    <button className="list-btn-item" type="button">2</button>
                    <button className="list-btn-item" type="button">3</button>
                    <button className="list-btn-item operator" type="button">+</button>
                </div>
                <div className="list-btn last-row">
                    <button className="list-btn-item" type="button">0</button>
                    <button className="list-btn-item" type="button">.</button>
                    <button className="list-btn-item operator" type="button">=</button>
                </div>
            </section>
        );
    }
};

export default Calculator;