import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  let [todo, setTodo] = useState("");
  let [list, setList] = useState([]);
  let [id, setId] = useState(0);

  function addToList() {
    setId(id + 1);
    let obj = { id: id, todo: todo };
    setList([...list, obj]);
  }

  function deleteTask(id) {
    setList(list.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      {/* Do not remove the main div */}
      <h3>To-Do List</h3>
      <input
        type="text"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      ></input>
      <button onClick={addToList}>Add Todo</button>
      <ul>
        {list.length > 0 &&
          list.map((task) => (
            <div>
              <li>
                <span>{task.todo}</span>
              </li>
              <button
                onClick={() => {
                  deleteTask(task.id);
                }}
              >
                Delete
              </button>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default App;
