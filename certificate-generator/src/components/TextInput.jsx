import {React, useState} from 'react'
import './TextInput.css'

function TextInput(props) {
    // const [text, setText] = useState(props.value || '');

    // const handleChange = (event) => {
    //     setText(event.target.value);
    // }

    return (
        <div>
        <label htmlFor={props.name}>{props.label}</label>            
        <input type="text" className="text-input"
                    name={props.name}
                    id={props.name}
                    value={props.value}
                    onChange={props.onChange}
                    placeholder={props.placeholder}                    
                    />
        </div>
    )
}

export default TextInput
