import './App.css'
import React, { useState } from 'react'
import TextInput from './components/TextInput.jsx'
import DateInput from './components/DateInput.jsx'
import FileInput from './components/FileInput.jsx'
import StudentTable from './components/StudentTable.jsx'

function App() {
  const today = new Date()
  const minDate = new Date(today.getFullYear() - 4, today.getMonth(), today.getDate()).toISOString().split('T')[0]
  const maxDate = new Date().toISOString().split('T')[0]


  // init form data
  const [formData, setFormData] = useState({
    schoolName: 'ABC High School',
    date: today.toISOString().split('T')[0],
    schoolLogo: null,
    students: [{ name: '', grade: '' }]
  })

  // handle inputs
  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prevData => ({
        ...prevData,
        [name]: (type === 'file') ? files[0] : value
      })
    );
  }

  // handle student table changes
  const handleStudentChange = (index, field, value) => {
    setFormData(prev => {
      const students = prev.students.map((student, i)=>{
        return (i === index)?{ ...student, [field]: value } : student       
      })
      
      return { ...prev, students };
    })
  };

  const addRow = () => {
    setFormData(prev => ({
      ...prev,
      students: [...prev.students, { name: '', grade: '' }]
    }));
  };

  const removeRow = (idx) => {
    setFormData(prev => ({
      ...prev,
      students: prev.students.filter((_, i) => i !== idx)
    }));
  };

  // generate pdf
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log('Form submitted:', formData);
    
  }

  return (
    <>      
      <div className="main-container">
        <form onSubmit={handleSubmit}>
          <TextInput placeholder="School Name"
            name="schoolName"
            value={formData.schoolName}
            onChange={handleInputChange}
            ></TextInput>

          <DateInput
            placeholder="Date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            min={minDate}
            max={maxDate}
          ></DateInput>
          
          <FileInput
            name="schoolLogo"
            value={formData.schoolLogo}
            onChange={handleInputChange}
            accept=".jpg,.png,.svg"
            multiple={false}
            placeholder="Upload School Logo"
          ></FileInput>

          <StudentTable 
            students={formData.students || [{}]}
            onChange={handleStudentChange}
            addRow={addRow}
            removeRow={removeRow}
          ></StudentTable>

          <button type="submit">Generate PDF</button>
        </form>
      </div>      
      
      
    </>
  )
}

export default App
