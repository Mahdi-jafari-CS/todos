import { TodoCard } from "./TodoCard";

export function TodoList(props) {
  const { todos } = props;
  const tab = "All";
  return (
    <>
      {todos.map((todo, index) => {
        return <TodoCard 
        key={index} 
        todoIndex={index} 
        {...props} />;
      })}
    </>
  );
}
