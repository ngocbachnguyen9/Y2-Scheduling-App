import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Popup = (props) => {
  return (
      <div className='popup-box'>
        <div className="not-box">
            <FaTimes style={{cursor:'pointer'}} onClick={props.handleClose}/>
            {props.content}
        </div>
      </div>
  )
}

export default Popup