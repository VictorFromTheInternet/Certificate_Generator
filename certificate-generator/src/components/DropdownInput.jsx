import React from 'react'

function DropdownInput({name, value, onChange, options, placeholder}) {
  return (
    <div>
        <select name={name} value={value} onChange={onChange} className="dropdown-input">
            <option value="" >{placeholder || "Select"}</option>
            {                
                options.map((option,index)=>{
                    return(
                        <option value={option.value} key={index}>{option.label}</option>                        
                    )
                })
            }           
        </select>      
    </div>
  )
}

export default DropdownInput
