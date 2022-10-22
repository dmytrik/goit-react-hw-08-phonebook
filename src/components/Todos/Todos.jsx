import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, toggleTodoComplete } from 'redux/store/todoSlice';

const Todos = () => {
  // const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const todos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();
  // const addTodo = () => {
  //   if (text.trim().length) {
  //     setTodos([
  //       ...todos,
  //       {
  //         id: Date.now(),
  //         text,
  //         completed: false,
  //       },
  //     ]);
  //     setText('');
  //   }
  // };

  // const toggleTodoComete = todoId => {
  //   // setTodos(
  //   //   todos.map(todo => {
  //   //     if (todo.id === todoId) {
  //   //       return {
  //   //         ...todo,
  //   //         completed: !todo.completed,
  //   //       };
  //   //     }
  //   //     return todo;
  //   //   })
  //   // );
  // };

  // const removeTodo = todoId => {
  //   // setTodos(todos.filter(({ id }) => id !== todoId));
  // };

  return (
    <>
      <label>
        <input
          type="text"
          value={text}
          onChange={e => {
            setText(e.target.value);
          }}
        />
        <button
          type="button"
          onClick={() => {
            dispatch(addTodo({ text }));
          }}
        >
          Додати тодо
        </button>
      </label>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => {
                dispatch(toggleTodoComplete({ id: todo.id }));
              }}
            />
            <span>{todo.text}</span>
            <button
              onClick={() => {
                dispatch(removeTodo({ id: todo.id }));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todos;
