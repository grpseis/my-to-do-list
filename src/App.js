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
        <p>
        <label className="form label">Nueva pendiente..</label>
        <input
            type="text"
            className="input"
            placeholder="Nueva pendiente.."
            value={value}
            onChange={e => setValue(e.target.value)}
        />
        </p>
        <div>
          <button className="button" onClick={() => addTodo(value)}>Adicionar pendiente</button>
        </div>


      </form>
  );
}

function App() {
  const [todos, setTodos] = React.useState([
    {
      id: 1,
      text: "Mi Primera tarea."
    },
    {
      id: 2,
      text: "Clase virtual a las 6:00pm"
    },
    {
      id: 3,
      text: "Realizar las actividades pendientes"
    }
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
        <div className="todo-list">
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