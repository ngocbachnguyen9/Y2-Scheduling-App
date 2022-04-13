import {useState} from 'react'

const AddModuleForm = ({addModuleHandler}) => {

    const[text, setText] = useState('')
    const[startTime, setStartTime] = useState('')
    const[endTime, setEndTime] = useState('')
    const[trainer, setTrainer] = useState('')
    const[trainerId, setTrainerId] = useState('')
    
    const onSubmit = e =>{

        e.preventDefault()
        addModuleHandler(text,startTime,endTime,trainer,trainerId)

    }

  return (
    <form className='addModuleForm' onSubmit={onSubmit}>
        <div className='form-control'>
            <label className='form-label'>Module:</label>
            <br></br>
            <input className='input-style' type="text" placeholder='Add Module' value={text} onChange={(e)=> setText(e.target.value)} required/>
        </div>
        <div className='form-control'>
        <br></br>
            <label className='form-label'>Trainer Name:</label>
            <br></br>
            <input className='input-style' type="text" placeholder='Add Trainer Name' value={trainer} onChange={(e)=> setTrainer(e.target.value)} required/>
        </div>
        <div className='form-control'>
        <br></br>
            <label className='form-label'>TrainerID:</label>
            <br></br>
            <input className='input-style' type="text" placeholder='Add Trainer ID' value={trainerId} onChange={(e)=> setTrainerId(e.target.value)} required/>
        </div>
        <div className='form-control'>
        <br></br>
            <label className='form-label'>Start day and time:</label>
            <br></br>
            <input className='input-style' type="datetime-local" value={startTime} onChange={(e)=> setStartTime(e.target.value)} required/>
        </div>
        <div className='form-control'>
        <br></br>
            <label className='form-label'>End day and time:</label>
            <br></br>
            <input className='input-style' type="datetime-local" value={endTime} onChange={(e)=> setEndTime(e.target.value)} required/>
        </div>
        <br></br>
        <div>
        <input  className='btn btn-pos1' type="submit" value="Add Module" />
        </div>
    </form>
  )
}

export default AddModuleForm