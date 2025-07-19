export function Tabs() {
  const tabs = ["All", "open", "Completed"];
  return (
    <nav className="tab-container">
      {tabs.map((tab, index) => (
        <button key={index} className="tab-button">
          <h4>{tab} <span>(0)</span></h4>
        </button>
      ))}
    </nav>
  );
}
