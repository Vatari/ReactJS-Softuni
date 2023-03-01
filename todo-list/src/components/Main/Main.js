import { useEffect, useState } from "react";

import Spinner from "../Spinner/Spinner";
const Main = () => {
  const baseUrl = "http://localhost:3030/jsonstore/todos";

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => {
        setTodos(Object.values(data));
      });
  }, []);
  return (
    <main className="main">
      <section className="todo-list-container">
        <h1>Todo List</h1>

        <div className="add-btn-container">
          <button className="btn">+ Add new Todo</button>
        </div>

        <div className="table-wrapper">
          {/*  <Spinner /> */}
          <table className="table">
            <thead>
              <tr>
                <th className="table-header-task">Task</th>
                <th className="table-header-status">Status</th>
                <th className="table-header-action">Action</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo) => (
                <tr key={todo._id} className="todo is-completed">
                  <td>{todo.text}</td>
                  <td>{todo.isCompleted ? "Complete" : "Not complete"}</td>
                  <td className="todo-action">
                    <button className="btn todo-btn">Change status</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default Main;
