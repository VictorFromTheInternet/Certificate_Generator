import {React, useState} from 'react'
import './TextareaInput.css'

function TextareaInput(props) {
    // const [text, setText] = useState(props.value || '');

    // const handleChange = (event) => {
    //     setText(event.target.value);
    // }

    return (
        <div>
        <textarea type="text" className="text-input"
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange}
                    placeholder={props.placeholder}                    
                    />
        </div>
    )
}

export default TextareaInput
