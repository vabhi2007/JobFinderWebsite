import React from 'react'
import "./JobForm.css"
const JobForm = () => {
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
    </div>
  )
}

export default JobForm
