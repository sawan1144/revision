
function App() {



  return (
    <div className="flex flex-col justify-center items-center gap-7 min-h-screen">

      <h1 className="text-5xl font-semibold">To-Do App</h1>

      <div className="flex flex-col gap-6 h-[50vh] w-[50vw] bg-teal-700 rounded p-10">

        <div className="flex gap-5">
          <input
            className="flex-1 bg-white text-gray-600 py-3 px-3 h-min rounded-lg"
            type="text" placeholder="Enter your todo" />
          <button className="py-3 px-4 bg-black text-white font-bold h-min rounded-lg">Add Task</button>
        </div>

        <div className="flex justify-between">
          <h4>Complete your homework</h4>
          <button>Delete</button>
        </div>

      </div>

    </div>
  )
}

export default App
