import React, { Component } from 'react';
import { Controls } from './Controls/Controls';
import css from './Counter.module.css';
class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };
  static propTypes = {};
  // эта запись олдскульная бабелем будет превращена в код на state = {value: 5}
  //   constructor() {
  //     super();
  //     this.state = {
  //       value: 5,
  //     };
  //   }
  state = { value: this.props.initialValue };
  // это если мы хотим изменить стейт мы передаем объект
  //   handleIncrement = event => {
  //     this.setState({ value: 11 });
  //   };
  //  это если мы хотим изменить стейт от предыдущего мы передаем функцию
  handleIncrement = event => {
    this.setState(prevState => {
      return { value: prevState.value + 1 };
    });
  };
  //  или так без ретерна
  //   handleIncrement = () => {
  //     this.setState(prevState => ({
  //       value: prevState.value + 1,
  //     }));
  //   };

  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };
  render() {
    // const { step } = this.props;

    return (
      <div>
        <span className={css.Counter__value}>{this.state.value}</span>
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
