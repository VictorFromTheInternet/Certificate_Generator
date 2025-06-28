import React, {useState} from 'react'
import './DateInput.css'

function DateInput(props) {
  // const [date, setDate] = useState(props.value || '');

  // const handleChange = (event) => {
  //   setDate(event.target.value);
  // }

  return (
    <div>
      <input type="date" className="date-input"
              name={props.name}
              value={props.date}
              onChange={props.onChange}
              min={props.min}
              max={props.max}
              placeholder={props.placeholder}
              />
    </div>
  )
}

export default DateInput
