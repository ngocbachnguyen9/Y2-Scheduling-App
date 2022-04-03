import React from 'react'

const Module = ({module}) => {
  return (
    <div className='module'>
      <h3>{module.moduleName}</h3>
      <p>{module.trainerID}</p>
      <p>{module.startTime}-{module.endTime}</p>
    </div>
  )
}

export default Module