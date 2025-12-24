import Post from './Post'
import React, { useEffect, useState } from 'react'

function App() {
  const [tabdata, settabdata] = useState({});
  const [currtab, setcurrtab] = useState(1);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos/" + currtab)
    .then(raw => {if(!raw.ok){throw new Error('there is a error'+ raw.status)}return raw.json()})
    .then(data => settabdata(data))
    .catch(err => console.log(err.message))
  }, [currtab])
  
  return (
  <div className='flex gap-9'>
    <button onClick={()=>setcurrtab(1)} className={currtab === 1 ? 'bg-red-600!' : ''}>Task 1</button>
    <button onClick={()=>setcurrtab(2)} className={currtab === 2 ? 'bg-red-600!' : ''}>Task 2</button>
    <button onClick={()=>setcurrtab(3)} className={currtab === 3 ? 'bg-red-600!' : ''}>Task 3</button>
    <button onClick={()=>setcurrtab(4)} className={currtab === 4 ? 'bg-red-600!' : ''}>Task 4</button><br />
    <div>{tabdata.title}</div>
  </div>
  )
} 

export default App
