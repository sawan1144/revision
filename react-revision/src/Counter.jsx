import React, { useEffect, useState } from 'react'


const Counter = () => {
  const [count, setCount] = useState(0);
  console.log('yay!')

  useEffect(()=>{
    const intrvid = setInterval(()=>
      {setCount(count => count + 1)}
    , 1000);
    return () => clearInterval(intrvid)
  }, [])

  return (
    <div className='p-14'>
      <h1 className='text-4xl mb-4'>{count}</h1>
    </div>
  )
}

export default Counter