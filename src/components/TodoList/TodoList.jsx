import React from 'react';
import css from './TodoList.module.css';
import classNames from 'classnames';
const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => {
  return (
    <ul className={css.TodoList}>
      {todos.map(({ id, text, completed }) => (
        // <li 
        // key={id} 
        // className={classNames('TodoList__item', {
        // 'TodoList__item--completed': completed,})}>
           <li 
        key={id} 
        className={css.TodoList__item}>
          {/* <input type="checkbox" className={css.TodoList__checkbox}
          checked={completed}
          onChange={()=> onToggleCompleted(id)}/> */}
          <p className={css.TodoList__text}>{text}</p>
          <button className={css.TodoList__btn} onClick={() => onDeleteTodo(id)} type="button">
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
};
export default TodoList;
