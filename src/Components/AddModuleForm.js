import React from 'react'

const AddModuleForm = () => {
  return (
    <form className='addModuleForm'>
        <div className='form-control'>
            <label>Module</label>
            <input type="text" placeholder='Add Module' />
        </div>
        <div className='form-control'>
            <label>Trainer Name</label>
            <input type="text" placeholder='Add Trainer Name' />
        </div>
        <div className='form-control'>
            <label>Trainer Skill</label>
            <input type="text" placeholder='Add Trainer Skill' />
        </div>
        <div className='form-control'>
            <label>Start day and time</label>
            <input type="text" placeholder='Add Start day and time' />
        </div>
        <div className='form-control'>
            <label>End day and time</label>
            <input type="text" placeholder='Add end day and time' />
        </div>
        <div>
        <input type="submit" value="add Module" />
        </div>

    </form>
  )
}

export default AddModuleForm