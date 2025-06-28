import React from 'react'
import './StudentTable.css'

function StudentTable({students, onChange, addRow, removeRow}) {
  return (
    <div className="table-container">
        <div className="table-controls-container">
            <button type="button" onClick={(index)=>{
                addRow({
                    name: '',
                    grade: ''
                })                
            }}>Add Row</button>    
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
                        <tr key={index}>
                            <td></td>
                            <td></td>
                            <td>                                
                                <button type="button" onClick={(index)=>{
                                    removeRow(index)
                                }}>Delete</button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default StudentTable
