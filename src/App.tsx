import { useEffect, useState } from 'react'
import './App.sass'
import Notes from './components/Notes'
import newTodo from './utils/newTodo'
import INote from './interfaces/INote'

const App = (): JSX.Element => {

  const [todos, setTodos] = useState([{
    title: "Title",
    content: "Content",
    isChangingColor: false,
    color: "#F0EC84"
  }])

  useEffect(() => {

    if (localStorage.getItem('todos')) {
      const savedTodos = localStorage?.getItem('todos')
      setTodos(JSON.parse(String(savedTodos)))
    } else {
      const defaultNote: INote[] = [{
        title: "Title",
        content: "Content",
        isChangingColor: false,
        color: "#F0EC84"
      }]

      setTodos(defaultNote)
    }
  }, [])

  return (
    <div>
      <div id="notes">
        <Notes props={[todos, setTodos]} />
        <div
          id='add-note'
          onClick={() => newTodo(todos, setTodos)}
        >
          <button> + </button>
        </div>
      </div>
    </div>
  )
}

export default App
