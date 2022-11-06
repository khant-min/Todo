import { useState, useEffect } from "react";
import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [isClicked, setIsClicked] = useState("light");
  const [active, setActive] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const id = todos.length ? todos[todos.length - 1].id + 1 : 1;
    const myNewTodo = { id, todo: newTodo, checked: false };
    const myTodos = [...todos, myNewTodo];
    setTodos(myTodos);
    setNewTodo("");
  };

  const handleChecked = todo => {
    const newTodo = todos.map(curTodo =>
      curTodo.id === todo.id ? { ...todo, checked: !todo.checked } : curTodo
    );
    setTodos(newTodo);
  };

  const handleDelete = id => {
    const newTodo = todos.filter(todo => todo.id !== id);
    setTodos(newTodo);
  };

  const styles = "flex flex-col items-center ";

  return (
    <div className={isClicked ? styles + "dark" : styles + "light"}>
      <Header isClicked={isClicked} setIsClicked={setIsClicked} />
      <Form
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        handleSubmit={handleSubmit}
      />
      <Footer
        todos={todos}
        setTodos={setTodos}
        handleDelete={handleDelete}
        handleChecked={handleChecked}
        active={active}
        setActive={setActive}
      />
    </div>
  );
};

export default App;
