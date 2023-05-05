import React from "react";
import "./App.css";

function Todo({ todo, index,  removeTodo }) {
  return (
      <div className="todo">
        {todo.text}
        <div>
          <button onClick={() => removeTodo(index)}>x</button>
        </div>
      </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    setValue("");
  };

  return (
      <form onSubmit={handleSubmit}>
        <p className="right">
            <input
            type="text"
            className="input"
            placeholder="Nuevo pendiente.."
            value={value}
            onChange={e => setValue(e.target.value)}
            />
            <button className="button" onClick={() => addTodo(value)}>Adicionar pendiente</button>
        </p>
      </form>
  );
}

function App() {
  const [todos, setTodos] = React.useState([

  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    if (!text) return;
    setTodos(newTodos);
  };


  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
      <div className="app">
        <div>
          <TodoForm addTodo={addTodo} />
          {todos.map((todo, index) => (
              <Todo
                  key={index}
                  index={index}
                  todo={todo}
                  removeTodo={removeTodo}
              />
          ))}

        </div>
      </div>
  );
}

export default App;