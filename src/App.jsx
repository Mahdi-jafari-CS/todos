 import { useState } from 'react'
import './fanta.css'
import { Header } from './components/Header'
import { Tabs } from './components/Tabs'
import { TodoList } from './components/TodoList'
import { TodoInput } from './components/TodoInput'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Tabs />
      <TodoList />
      <TodoInput />
       
    </ >
  )
}

export default App
