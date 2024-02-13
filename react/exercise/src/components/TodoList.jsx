import { useState } from "react";

export const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (event) => {
    event.preventDefault();

    const todo = event.target.elements.todo.value;

    setTodos((todos) => [...todos, todo]);

    event.target.elements.todo.value = "";
  };

  const handleResetTodos = () => {
    setTodos([]);
  };

  const handleRemoveTodo = (index) => {
    setTodos((todos) => {
      return todos.filter((_, i) => i !== index);
    });
  };  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input name="todo" />
        <button type="submit">Add</button>
      </form>
      <button onClick={handleResetTodos}>Reset</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleRemoveTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
