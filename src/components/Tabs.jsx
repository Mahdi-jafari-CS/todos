export function Tabs(props) {
  const { todos } = props;
  const tabs = ["All", "open", "Completed"];
  return (
    <nav className="tab-container">
      {tabs.map((tab, index) => (
        <button key={index} className="tab-button">
          <h4>
            {tab}{" "}
            <span>
              (
              {
                todos.filter((todo) =>
                  tab === "All"
                    ? true
                    : tab === "Completed"
                    ? todo.completed
                    : !todo.completed
                ).length
              }
              )
            </span>
          </h4>
        </button>
      ))}
    </nav>
  );
}
