import React from 'react'
import './StudentTable.css'

import TextInput from './TextInput.jsx'
import DropdownInput from './DropdownInput.jsx'

function StudentTable({students, onChange, addRow, removeRow}) {
  return (
    <div className="table-container">
        <div className="table-controls-container">
            <button type="button" onClick={addRow}>Add Row</button>    
        </div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Grade</th>
                    <th>Control</th>                    
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
                                    <DropdownInput
                                        name={`student-${index}-grade`}
                                        value={student.grade}
                                        onChange={(e)=>{
                                            onChange(index, 'grade', e.target.value)
                                        }}
                                        options={[
                                            {value: 'A', label: 'A'},
                                            {value: 'B', label: 'B'},
                                            {value: 'C', label: 'C'},
                                            {value: 'D', label: 'D'},
                                            {value: 'F', label: 'F'}
                                        ]}
                                        placeholder="Select"
                                    ></DropdownInput>
                                </td>
                                <td>                                
                                    <button type="button" onClick={()=>{
                                        removeRow(index)
                                    }}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default StudentTable
