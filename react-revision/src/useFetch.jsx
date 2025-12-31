import React, { useEffect, useState } from 'react'

const useFetch = (city) => {
    const [data, setData] = useState('')
    const api = '958f47d8bc2af0f3e440374128cb9203';

    useEffect(()=>{
        if(!city){return}
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`)
        .then((raw)=>{if(!raw.ok){throw new Error(raw.status)}return raw.json()})
        .then((data)=>setData(data)) 
        .catch((err)=>{console.log(err.message)});  
    },[city])

    return (
        {data}
    )
}

export default useFetch