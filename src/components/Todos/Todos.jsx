import { useState } from 'react';

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString,
          text,
          completed: false,
        },
      ]);
    }
  };

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
        <button type="button" onClick={addTodo}>
          Додати тодо
        </button>
      </label>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input type="checkbox" />
            <span>{todo.text}</span>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todos;
