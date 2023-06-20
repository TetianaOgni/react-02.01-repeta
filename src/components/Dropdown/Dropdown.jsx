// import { render } from '@testing-library/react';
import React, { Component } from 'react';
import css from './Dropdown.module.css';
class Dropdown extends Component {
  state = {
    visible: false,
  };
  // используем тогл тогда шоу и хайд можно убрать и вместо двух кнопок сделать одну тогл

  toggle = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  };

  //   show = () => {
  //     this.setState({ visible: true });
  //   };
  //   hide = () => {
  //     this.setState({ visible: false });
  //   };
  render() {
    const { visible } = this.state;
    return (
      <div className={css.Dropdown}>
        <button
          type="button"
          className={css.Dropdown__toggle}
          onClick={this.toggle}
        >
          {visible ? 'Скрыть' : 'Показать'}
        </button>
        {/* <button
          type="button"
          className={css.Dropdown__toggle}
          onClick={this.show}
        >
          Показать
        </button> */}
        {/* <button
          type="button"
          className={css.Dropdown__toggle}
          onClick={this.hide}
        >
          Скрыть
        </button>
        {this.state.visible && (
          <div className={css.Dropdown__menu}>Выпадающие меню</div>
        )} */}
        {this.state.visible && (
          <div className={css.Dropdown__menu}>Выпадающие меню</div>
        )}
      </div>
    );
  }
}
export default Dropdown;
