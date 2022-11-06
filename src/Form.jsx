import mark from "../img/icon-check.svg";

const Form = ({ newTodo, setNewTodo, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="relative m-10">
      <button className="absolute left-3 top-4 hover:border p-1 rounded-sm">
        <img src={mark} />
      </button>
      <input
        className="bg-gray-800 w-96 px-10 py-3 rounded-sm text-gray-300 w-[510px]"
        type="text"
        required
        id="todo"
        placeholder="Enter your todos..."
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
      />
    </form>
  );
};

export default Form;
