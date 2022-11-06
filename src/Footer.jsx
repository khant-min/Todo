import del from "../img/icon-cross.svg";
import mark from "../img/icon-check.svg";

const Footer = ({ todos, setTodos, handleDelete, handleChecked }) => {
  const styles = "hover:text-white px-4";

  const custom = props => {
    switch (props) {
      case "all":
        setTodos(todos);
        break;
      case "active":
        setTodos([...todos.filter(todo => todo.checked === false)]);
        break;
      case "completed":
        setTodos([...todos.filter(todo => todo.checked === true)]);
        break;
      case "clear_completed":
        setTodos([]);
        break;
    }
  };

  return (
    <main className="mb-6">
      <ul>
        {todos.map(todo => (
          <li
            className="flex items-center justify-between p-4 m-2"
            key={todo.id}
          >
            <button
              className="rounded-3xl border p-2"
              onClick={() => handleChecked(todo)}
            >
              <img src={mark} />
            </button>
            <label
              className={
                todo.checked
                  ? "line-through text-xl text-gray-400"
                  : "text-xl text-white"
              }
            >
              {todo.todo}
            </label>
            <button
              onClick={() => handleDelete(todo.id)}
              className="text-gray-800 hover:bg-gray-400 p-1"
            >
              <img src={del} />
            </button>
          </li>
        ))}
      </ul>
      <div className="flex p-4 bg-gray-900 text-grey text-slate-400 rounded-lg w-[500px]">
        <p>items left</p>
        <button className={styles} onClick={() => custom("all")}>
          All
        </button>
        <button className={styles} onClick={() => custom("active")}>
          Active
        </button>
        <button className={styles} onClick={() => custom("completed")}>
          Completed
        </button>
        <div className={styles} onClick={() => custom("clear_completed")}>
          <button>Clear Completed</button>
        </div>
      </div>
    </main>
  );
};

export default Footer;
