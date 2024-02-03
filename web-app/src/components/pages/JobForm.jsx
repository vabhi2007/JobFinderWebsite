import React, {useState} from 'react'
import "./JobForm.css"
const JobForm = () => {

  const [isSubmitted, setSubmit] = useState(false);
  const handleClick = () => {
    if (isSubmitted == false){
      setSubmit(!isSubmitted);
    }
    
  }

  return (
    <div className='FormBox'>
      <div className='Header'>Application</div>
      <div className='Name'>Name</div>
      <input type="text" className='InputBox'/>
      <div className='Name'>Email</div>
      <input type="text" className='InputBox'/>
      <div className='Name'>Phone</div>
      <input type="text" className='InputBox'/>
      <div className='Name'>Resume</div>
      <button className='Upload'>Upload</button>
      <button className={isSubmitted ? 'Submit clicked' : 'Submit'} onClick={handleClick}>
        {isSubmitted && <p>Submitted</p>}
        {!isSubmitted && <p>Submit</p>}
      </button>
    </div>
  )
}

export default JobForm
