import React from 'react'

const Module = ({module}) => {
  return (
    <div className='module'>
      <h3>{module.moduleName}</h3>
      <p>Module Trainer: {module.trainerName}</p>
      <p>Start Time: {module.startTime}</p>
      <p>End Time: {module.endTime}</p>
    </div>
  )
}

export default Module