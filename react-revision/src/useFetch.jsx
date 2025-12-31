import React, { useEffect, useState } from 'react'

const useFetch = (user) => {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)


    useEffect(()=>{
        if(!user){return}
        setLoading(true)
        fetch(`https://api.github.com/users/${user}`)
        .then((raw)=>{if(!raw.ok){return new Error(`error is ${raw.status}`)} return raw.json()})
        .then((data)=>setData(data)) 
        .finally(()=>setLoading(false))   
    },[user])

    return (
        {data, loading}
    )
}

export default useFetch