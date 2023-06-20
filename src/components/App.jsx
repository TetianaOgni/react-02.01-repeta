import React, { Component } from 'react';
import Counter from 'components/Counter';
import Dropdown from 'components/Dropdown';
import ColorPicker from 'components/ColorPicker';
import TodoList from 'components/TodoList';
import initialTodos from './todos.json';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];
// если  нам не надо в Арр хранить стейт общий для компонентов то можно использовать такой вид Арр если нужно - превращаем Арр в класс
// export const App = () => {
//   return (
//     <>
//       <h1>Состояние компонента</h1>
//       <Counter initialValue={10} />
//       <Dropdown />
//       <ColorPicker options={colorPickerOptions} />
//       <TodoList />
//     </>
//   );
// };
class App extends Component {
  state = {
    todos: initialTodos,
  };
  // так как стейт находится здесь в Арр то и функцию для удаления тудушки пишем здесь
  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };
  render() {
    const { todos } = this.state;

    // const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodoCount = todos.length;
    const completedTodos = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );

    return (
      <>
        <h1>Состояние компонента</h1>
        <Counter initialValue={10} />
        <Dropdown />
        <ColorPicker options={colorPickerOptions} />
        <div>
          <p>Общее количество тудушек: {totalTodoCount}</p>
          <p>Количество выполненных тудушек: {completedTodos}</p>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}
export default App;
