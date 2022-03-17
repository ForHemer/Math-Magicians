import React from 'react';
import calculate from './logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(item) {
    const funcBtn = item.target.textContent;
    this.setState((e) => calculate(e, funcBtn));
  }

  render() {
    const { total, next, operation } = this.state;

    return (

      <section className="calculator-container">
        <div className="display">{ next || operation || total || 0}</div>

        <div className="list-btn">
          <button onClick={this.handleClick} className="list-btn-item" type="button">AC</button>
          <button onClick={this.handleClick} className="list-btn-item" type="button">+/-</button>
          <button onClick={this.handleClick} className="list-btn-item" type="button">%</button>
          <button onClick={this.handleClick} className="list-btn-item operator" type="button">÷</button>
        </div>
        <div className="list-btn">
          <button onClick={this.handleClick} className="list-btn-item" type="button">7</button>
          <button onClick={this.handleClick} className="list-btn-item" type="button">8</button>
          <button onClick={this.handleClick} className="list-btn-item" type="button">9</button>
          <button onClick={this.handleClick} className="list-btn-item operator" type="button">x</button>
        </div>
        <div className="list-btn">
          <button onClick={this.handleClick} className="list-btn-item" type="button">4</button>
          <button onClick={this.handleClick} className="list-btn-item" type="button">5</button>
          <button onClick={this.handleClick} className="list-btn-item" type="button">6</button>
          <button onClick={this.handleClick} className="list-btn-item operator" type="button">-</button>
        </div>
        <div className="list-btn">
          <button onClick={this.handleClick} className="list-btn-item" type="button">1</button>
          <button onClick={this.handleClick} className="list-btn-item" type="button">2</button>
          <button onClick={this.handleClick} className="list-btn-item" type="button">3</button>
          <button onClick={this.handleClick} className="list-btn-item operator" type="button">+</button>
        </div>
        <div className="list-btn last-row">
          <button onClick={this.handleClick} className="list-btn-item" type="button">0</button>
          <button onClick={this.handleClick} className="list-btn-item" type="button">.</button>
          <button onClick={this.handleClick} className="list-btn-item operator" type="button">=</button>
        </div>
      </section>
    );
  }
}

export default Calculator;
