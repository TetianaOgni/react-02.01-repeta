import React from 'react';
import css from './TodoList.module.css';
const TodoList = ({ todos, onDeleteTodo }) => {
  return (
    <ul className={css.TodoList}>
      {todos.map(({ id, text }) => (
        <li key={id} className={css.TodoList__item}>
          <p>{text}</p>
          <button onClick={() => onDeleteTodo(id)} type="button">
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
};
export default TodoList;
