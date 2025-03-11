import React from "react";
import InputTodo from "./components/InputTodo";
import List from "./components/List";
function App() {
  return (
    <div className="app-container">
      <InputTodo />
      <List />
    </div>
  );
}

export default App;
