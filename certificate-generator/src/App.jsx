import './App.css'
import React, { useState, useRef } from 'react'
import TextInput from './components/TextInput.jsx'
import TextareaInput from './components/TextareaInput.jsx'
import DateInput from './components/DateInput.jsx'
import FileInput from './components/FileInput.jsx'
import StudentTable from './components/StudentTable.jsx'
import PDFDoc from './components/PdfComponent.jsx'
import PDFViewer from '@react-pdf/renderer'
import {pdf} from '@react-pdf/renderer'
import Credits from './components/Credits.jsx'

function App() {  
  // const today = new Date().toLocaleDateString()
  // const currYear = today.split('/')[2].padStart(2,'0')
  // const currMonth = today.split('/')[0].padStart(2, '0') 
  // const currDay = today.split('/')[1].padStart(2, '0')
  // const minDate = `${String(currYear - 4).padStart(2,'0')}-${currMonth}-${currDay}`
  // const maxDate = `${currYear}/${currMonth}/${currDay}`
  
  const maxDate = [
    new Date().getFullYear(),
    String(new Date().getMonth() + 1).padStart(2, '0'),
    String(new Date().getDate()).padStart(2, '0')
  ].join('-');

  const minDate = [
    new Date().getFullYear() - 4,
    String(new Date().getMonth() + 1).padStart(2, '0'),
    String(new Date().getDate()).padStart(2, '0')
  ].join('-');  

  function formatDate(date){
    const year = date.split('-')[0]
    const month = date.split('-')[1].padStart(2, '0')
    const day = date.split('-')[2].padStart(2, '0')
    return `${month}/${day}/${year}`
  }

  const [pdfUrl, setPdfUrl] = useState(null)
  const pdfUrlRef = useRef()


  // init form data
  const [formData, setFormData] = useState({    
    title: 'A-B Honor Roll',
    subtitle: 'Certificate of Achievement',
    presentedToParagraph:'This Certificate Is Presented To',
    mainParagraph: 'This certificate is awarded in recognition of the dedication, commitment, and hard work demonstrated by the recipient. It serves as a testament to their knowledge and proficiency in the subject matter.',
    fromName: 'Teacher Name',
    fromTitle: 'Math - 3rd Grade',
    date: maxDate,
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


  // generate pdf btn
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log('Form submitted:', formData);



    // clean prev blob url
    if(pdfUrlRef.current){
      URL.revokeObjectURL(pdfUrlRef.current)
    }

    // generate pdf blob and set url
    const generatePdf = async () =>{
      const blob = await pdf(
        <PDFDoc 
          debug={true}          
          title={formData.title}
          subtitle={formData.subtitle}
          mainParagraph={formData.mainParagraph}
          presentedToParagraph={formData.presentedToParagraph}
          fromName={formData.fromName}
          fromTitle={formData.fromTitle}
          schoolLogo={formData.schoolLogo ? URL.createObjectURL(formData.schoolLogo): "/images/Badge.png"}
          date={ formatDate(formData.date) }
          students={formData.students}>            
          </PDFDoc>
      ).toBlob()

      const url = URL.createObjectURL(blob)
      setPdfUrl(url)
    }
    generatePdf()


    // clean up
    return()=>{
      if(pdfUrlRef.current){
        URL.revokeObjectURL(pdfUrlRef.current)
      }
    }
    
  }

  return (
    <>      
      <div className="main-container">
        <div className="card">
          <form onSubmit={handleSubmit}> 

            <h1 className="title">Certificate Generator</h1>         

            <div className="flex-row">

              <div className="flex-col">
                <TextInput placeholder="Title"
                name="title"
                label="Title:"
                value={formData.title}
                onChange={handleInputChange}
                ></TextInput>
              </div>
              
              <div className="flex-col">
                <TextInput placeholder="Subtitle"
                  name="subtitle"
                  label="Subtitle:"
                  value={formData.subtitle}
                  onChange={handleInputChange}
                  ></TextInput>
              </div>
              
              <div className="flex-col">
                <TextInput placeholder="This Certificate Is Presented To"
                  name="presentedToParagraph"
                  label="Presented To ...:"
                  value={formData.presentedToParagraph}
                  onChange={handleInputChange}
                  ></TextInput>
              </div>
                          
            </div>
            
            <div className="flex-row">
              <div className="flex-col">
                <TextareaInput             
                  placeholder="This certificate is awarded in recognition of the dedication, commitment, and hard work demonstrated by the recipient. It serves as a testament to their knowledge and proficiency in the subject
      matter."
                  name="mainParagraph"
                  label="Main Paragraph:"
                  value={formData.mainParagraph}
                  onChange={handleInputChange}
                  rows={5}
                  ></TextareaInput>
              </div>
              
            </div>

            <div className="flex-row">
              <div className="flex-col">
                <TextInput placeholder="From Name"
                  name="fromName"
                  label="From Name:"
                  value={formData.fromName}
                  onChange={handleInputChange}
                  ></TextInput>
              </div>            

              <div className="flex-col">
                <TextInput placeholder="Teacher Title"
                  name="fromTitle"
                  label="From Title:"
                  value={formData.fromTitle}
                  onChange={handleInputChange}
                  ></TextInput>
              </div>            

              <div className="flex-col">
                <DateInput
                  placeholder="Date"
                  name="date"
                  label="Date Awarded:"
                  value={formData.date}
                  onChange={handleInputChange}
                  min={minDate}
                  max={maxDate}
                ></DateInput>
              </div>      

              <div className="flex-col">
                <FileInput
                  name="schoolLogo"
                  label="School Logo (png, svg, jpg):"
                  value={formData.schoolLogo}
                  onChange={handleInputChange}
                  accept=".jpg,.png,.svg"
                  multiple={false}
                  placeholder="Upload School Logo"
                ></FileInput>  
              </div>      

            </div>                        
                  
            <div className="table-container">
              <StudentTable 
                label="Students:"
                students={formData.students || [{}]}
                onChange={handleStudentChange}
                addRow={addRow}
                removeRow={removeRow}
              ></StudentTable>
            </div>
            

            <button type="submit" className="btn-submit">Generate PDF</button>
          </form> 
        </div>        

        <div className="pdf-container" hidden={pdfUrl == null ? true : false} >
          <iframe src={pdfUrl} width="100%" height="500px"></iframe>
        </div>
      </div>      
      
      <Credits></Credits>
      
    </>
  )
}

export default App
