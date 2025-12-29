import { useState } from "react"

function App() {
  const initial = 0;
  const [count, setcount] = useState(initial)

  function Increase(){
    setcount((cr)=>cr + 1)
  }
  function Decrease(){
    setcount((cr)=>cr - 1)
  }
  function Reset(){
    setcount(initial);
  }


  return (
  <div className="min-h-screen p-15">
      <div className="text-4xl font-semibold ">Counter: {count}</div>
      <div className="pt-10 flex gap-3">
        <button onClick={Increase} className="btn-body">Increase</button>
        <button onClick={Reset} className="btn-body">Reset</button>
        <button onClick={Decrease} className="btn-body">Decrease</button>
      </div>
  </div>
  )
}

export default App
