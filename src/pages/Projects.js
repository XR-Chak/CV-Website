import React from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react';
function Projects() {
  const num = useSelector(state=>state.counter.value);
  const [value,setValue] = useState(0);

  return (
    <div>
      Projects
      <button onClick={()=>setValue(value+1)}>++</button>
      <button onClick={()=>setValue(value-1)}>--</button>
      {value}
      <div>{num}</div>
    </div>
  )
}

export default Projects

