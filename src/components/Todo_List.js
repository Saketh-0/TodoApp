import React, {useState} from 'react'
import Todo from './Todo';
import Todo_Form from './Todo_Form'

function Todo_List() {
    const [todos, setTodos] = useState([]);
    //To Add Tasks
    const addTodo = todo => {
      if (!todo.text || /^\s*$/.test(todo.text)) {
        return;
      }
      const newTodos = [todo, ...todos];
      setTodos(newTodos);
    };
    //To Update or Change Tasks
    const updateTodo = (todoId, newValue) => {
      if (!newValue.text || /^\s*$/.test(newValue.text)) {
        return;
    }
      setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };
    //To Remove Tasks
    const removeTodo = id => {
      const removedArr = [...todos].filter(todo => todo.id !== id);
      setTodos(removedArr);
    };
    const completeTodo = id => {
      let updatedTodos = todos.map(todo => {
        if (todo.id === id) {
          todo.isComplete = !todo.isComplete;
        }
        return todo;
      });
      setTodos(updatedTodos);
    };
  
    return (
      <>
        <h1>What are the tasks for Today?</h1>
        <Todo_Form onSubmit={addTodo} />
        <Todo
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      </>
    );
  }
export default Todo_List;