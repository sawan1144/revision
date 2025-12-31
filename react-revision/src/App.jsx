import { useState } from "react"
import Todolist from "./Todolist"

function App() {
  const [value, setValue] = useState('')
  const [todos, settodos] = useState([])

  function clickHandler(){
    const item = {
      id: todos.length + 1,
      text: value,
    }
    settodos((prev)=>[...prev, item])
    setValue('')
  }

  function deleteHandler(id){
    settodos(todos.filter((d)=> d.id !== id))
  }

  return (
    <div className="flex flex-col justify-center items-center gap-7 min-h-screen">

      <h1 className="text-5xl font-semibold">To-Do App</h1>

      <div className="flex flex-col gap-6 h-[50vh] w-[50vw] bg-teal-700 rounded p-10">

        <div className="flex gap-5">
          <input
            className="flex-1 bg-white text-gray-600 py-3 px-3 h-min rounded-lg"
            type="text" placeholder="Enter your todo" 
            value={value} onChange={(e)=>setValue(e.target.value)}/>
          <button onClick={clickHandler} className="py-3 px-4 bg-black text-white font-bold h-min rounded-lg">Add Task</button>
        </div>

      {todos.map((d)=> <Todolist key={d.id} id={d.id} text={d.text} ondelete={deleteHandler} />)}

      </div>

    </div>
  )
}

export default App
