import { useEffect, useState } from "react"

function App() {
  const [value, setValue] = useState('')
  const [user, setUser] = useState('')
  const [data, setData] = useState({})

  function getUser(){
    setUser(value)
    setValue('');
  }

  useEffect(()=>{
    if(!user){
      //do nothing
    } else { fetch(`https://api.github.com/users/${user}`)
    .then((raw)=>{if (!raw.ok){throw new Error(`error${raw.status}`)} else return raw.json()})
    .then((data)=>setData(data))
    .catch((err)=> console.log(err.message))
  }
   },[user])


  return (
    <div className="flex flex-col justify-center items-center gap-7 min-h-screen">

      <h1 className="text-5xl font-semibold">Github Profile Fetcher</h1>

      <div className="flex flex-col gap-6 h-[50vh] w-[50vw] bg-teal-800 rounded p-10">

        <div className="flex gap-5">
          <input className="bg-gray-500 px-4 py-3 rounded-lg flex-1"
          type="text" placeholder="Enter username here"
          value={value} onChange={(e)=>setValue(e.target.value)}/>
          <button onClick={getUser} className="px-8 py-3 bg-teal-600 font-bold rounded-lg">Get</button>
        </div>

        <div className="flex px-5 py-5 gap-15">
          <div className="flex flex-col items-center gap-5">
            <img src={data.avatar_url} className="bg-gray-400 h-30 w-30 rounded-full" />
            <div>{data.name ? data.name : 'Username'}</div>
          </div>
          <div className="flex flex-col gap-5 w-[30vw]">
            <div>{data ? (data.bio ? data.bio : "N/A bio not found"): "Bio of the person appears here"}</div>
            <div>{data.following ? data.following : '0'}</div>
            <div>{data.public_repos ? data.public_repos : '0'}</div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
