import React, { useEffect, useState } from 'react'

export default function UseEff() {
const [count,setCount] = useState(0)

    useEffect(()=>{
        console.log("useEffect")
    },[count])
  return (

    <div>
   
    {console.log("rendering")}
    <h3>{count}</h3>
    <button onClick={()=>{setCount((count)=>count+1)}}>+</button>


    </div>
  )
}
