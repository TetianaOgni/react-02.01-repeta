import React, { Component } from 'react';
import shortid from 'shortid';
import Counter from 'components/Counter';
import Dropdown from 'components/Dropdown';
import ColorPicker from 'components/ColorPicker';
import TodoList from 'components/TodoList';
// import initialTodos from './todos.json';
import TodoEditor from './TodoEditor/TodoEditor';
import Modal from './Modal';

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
  // этот стейт для 02.01 и для 02.02
  // state = {
  //   todos: initialTodos,
  // fitler:''
  // };


   // этот стейт для 03.01 так как мы записываем в него из локалсторидж данные в методе componentDisUpdate()
  state = {
    todos: [],
    // fitler:'',
    showModal:false,
  };

// 03.01 localStorage---- эти методы мы не используем как колбеки => мы из не делаем стрелочной функции публичным свойством, это обычный метод класса мы его в onClick передавать не будем
componentDidMount() {
  // console.log('App componentDidMount')
  const todos = localStorage.getItem('todos')
  const parsedTodos = JSON.parse(todos)
// обязательно делаем проверку иначе при значении null весь код упадет
  if(parsedTodos){
    this.setState({todos: parsedTodos})
  }
  
}

componentDidUpdate(prevProps, prevState){
  // console.log('App componentDidUpdate')

  if (this.state.todos !== prevState.todos){
    
    // console.log('Обновилось поле todos')
    localStorage.setItem('todos', JSON.stringify(this.state.todos))
  }
  // console.log(prevProps, prevState)
  // console.log(this.state)

}

  toggleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal
    }))
  }
  
  addTodo = text=> {
    // console.log(text)

    const todo = {
      id: shortid.generate(),
      text: text,
      completed: false,
    }
   this.setState(prevState => ({
    todos: [todo, ...prevState.todos]
   }))

  }


  // так как стейт находится здесь в Арр то и функцию для удаления тудушки пишем здесь
  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };
// from 02.02 lesson
toggleCompleted = todoId => {
//  console.log(todoId);
 this.setState(prevState=> ({
  todos: prevState.todos.map(todo => {
    if (todo.id ===todoId)
    // console.log("нашли тот туду который нужен")
    return {
      ...todo, completed: !todo.completed,
    }
  })
}))
  // this.setState(prevState => ({
  //   todos: prevState.todos.map(todo =>
  //      todo.id === todoId 
  //      ?{
  //     ...todo, 
  //     completed: !todo.completed,
  //   }
  //   :todo,
  //   ),
  // }));
}

  render() {
    const { todos, showModal } = this.state;

    // const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodoCount = todos.length;
    const completedTodos = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );

    return (
      <>
         <button type='button' onClick={this.toggleModal}>Open Modal</button>
         {/* если showModal === true, то зарендериться модалка ести false, то нет */}
         {showModal && ( 
         <Modal onClose={this.toggleModal}>
          <h1>Hi! It is my Modal</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <button typeof='button' onClick={this.toggleModal}>Close Modal</button>
         </Modal>)}


        <h1>Состояние компонента</h1>
        <Counter initialValue={10} />
        <Dropdown />
        <ColorPicker options={colorPickerOptions} />
        <TodoEditor onSubmit={this.addTodo}/>
        <div>
          <p>Общее количество тудушек: {totalTodoCount}</p>
          <p>Количество выполненных тудушек: {completedTodos}</p>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} onToggleCompleted={this.toggleCompleted}/>
      </>
    );
  }
}
export default App;
