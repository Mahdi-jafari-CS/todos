export function Header(props) {
    // unpacing
    
  const { todos } = props;
  const openTodosCount = todos.filter((todo) => !todo.completed).length;
  const isTaskPlural = todos.length !== 1;
  return (
    <header>
      <h1 className="text-gradient">
        You have {openTodosCount} open {isTaskPlural ? "todos" : "todo"}
      </h1>
    </header>
  );
}
