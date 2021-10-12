import React, {useState} from 'react'
import Todo_Form from './Todo_Form'
import {MdEditNote} from 'react-icons/md';
import {MdRemoveCircleOutline} from 'react-icons/md';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
    const [edit, setEdit] = useState({
      id: null,
      value: ''
    });
  
    const submitUpdate = value => {
      updateTodo(edit.id, value);
      setEdit({
        id: null,
        value: ''
      });
    };
  
    if (edit.id) {
      return <Todo_Form edit={edit} onSubmit={submitUpdate} />;
    }
  
    return todos.map((todo, index) => (
      <div
        className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
        key={index}
      >
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.text}
        </div>
        <div className='icons'>
          <MdRemoveCircleOutline
            onClick={() => removeTodo(todo.id)}
            className='delete-icon'
          />
          <MdEditNote
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
            className='edit-icon'
          />
        </div>
      </div>
    ));
  };
export default Todo
