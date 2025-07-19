export function TodoCard(props) {
  const { todoIndex, todos } = props;
  const todo = todos[todoIndex];

  return (
    <div className="card todo-item">
      <p>{todo.input}</p>
      <div className="todo-buttons">
        <button disabled={todo.completed}>Done</button>
        <button><h6>Delete</h6></button>
      </div>
    </div>
  );
}
 