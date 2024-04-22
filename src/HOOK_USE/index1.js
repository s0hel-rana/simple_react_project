import React, { useState } from 'react'

export default function HOOK_USE1() {

const [count, setCount] = useState(0)

const handleInc = () =>{
    setCount(count + 1);
}

  return (
    <div>
        <h2>Count : {count}</h2>
        <button onClick={handleInc}>Increment</button>
    </div>
  )
}
