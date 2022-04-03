import React from 'react'
import Module from './Module'


const Modules = ({modules}) => {
  return (
    <>
    {modules.map((module)=>(
        <Module key={module.id} 
        module={module}/>
    ))}
    </>
  )
}

export default Modules