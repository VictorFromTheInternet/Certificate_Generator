import {React,useState} from 'react'
import './FileInput.css'

function FileInput(props) {
  
  // const handleChange = (event) => {
  //   if(props.onChange){
  //     props.onChange(event)
  //   }
  // }

  return (
    <div>
      <label htmlFor={props.name}>{props.label}</label>
      <input type="file" className="file-input"
              name={props.name}              
              onChange={props.onChange}
              accept={props.accept}
              multiple={props.multiple}
              placeholder={props.placeholder}/>
    </div>
  )
}

export default FileInput
