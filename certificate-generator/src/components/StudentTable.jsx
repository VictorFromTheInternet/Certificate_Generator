import React from 'react'
import './StudentTable.css'

import TextInput from './TextInput.jsx'
import DropdownInput from './DropdownInput.jsx'

function StudentTable({students, onChange, addRow, removeRow}) {
  return (
    <div className="table-container">              
        <table>
            <thead>
                <tr>
                    <th>Name</th>                    
                    <th>Delete</th>                    
                </tr>
            </thead>

            <tbody>
                {
                    students.map((student,index)=>{
                        return(
                            <tr key={index}>
                                <td>
                                    <TextInput
                                        name={`student-${index}-name`}
                                        value={student.name}
                                        onChange={(e)=>{
                                            onChange(index, 'name', e.target.value)
                                        }}
                                        placeholder="Enter student name"
                                    ></TextInput>
                                </td>                                
                                <td>                                
                                    <button type="button" className="btn-danger" onClick={()=>{
                                        removeRow(index)
                                    }}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        <div className="table-controls-container">
            <button type="button" onClick={addRow}>Add Row</button>    
        </div>
    </div>
  )
}

export default StudentTable
