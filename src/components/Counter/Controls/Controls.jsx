import React from 'react';
import css from './Controls.module.css';
export const Controls = ({ onIncrement, onDecrement }) => {
  return (
    <div className={css.Counter__controls}>
      <button type="button" onClick={onIncrement}>
        Increment by 1
      </button>
      <button type="button" onClick={onDecrement}>
        Decrement by 1
      </button>
    </div>
  );
};
