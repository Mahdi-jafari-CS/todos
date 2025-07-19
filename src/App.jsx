import { useState } from "react";
import "./fanta.css";
import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoList } from "./components/TodoList";
import { TodoInput } from "./components/TodoInput";

function App() {
  const todos = [
    { input: "learn react js", completed: true },
    { input: "go to the gym", completed: false },
    { input: "study for the upcoming exam", completed: false },
    { input: "attend the meeting", completed: true },
  ];
 

  return (
    <>
      <Header todos = {todos}/>
      <Tabs todos = {todos}/>
      <TodoList todos = {todos}/>
      <TodoInput />
    </>
  );
}

export default App;
