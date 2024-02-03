import React, {useState} from 'react'
import "./JobForm.css"
const JobForm = () => {

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  }

  const handleUpload = () => {
    // Process the selected file locally
    if (selectedFile) {
      console.log('Selected file:', selectedFile);
      // You can perform any operations with the file here, such as reading its content, etc.
    } else {
      console.log('No file selected');
    }
  };

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
      <div>
      <input type="file" onChange={handleFileChange}/>
      <button className={selectedFile == null ? 'Upload' : 'Upload clicked'} onClick={handleUpload}>
        {selectedFile == null && <p>Upload</p>}
        {selectedFile != null && <p>File Selected</p>}
      </button>
      
      </div>
    
      
        <button className={isSubmitted ? 'Submit clicked' : 'Submit'} onClick={handleClick}>
        {isSubmitted && <p>Submitted</p>}
        {!isSubmitted && <p>Submit</p>}
      </button>
    </div>
  )
}

export default JobForm
