import React from 'react';
import { Page, Text, Font, View, Image, Document, StyleSheet } from '@react-pdf/renderer';

// fonts
Font.register({
	family: "Lato",       
    src: '/fonts/Lato/Lato-Regular.ttf'
})
Font.register({
	family: "PinyonScript",    	
    src: '/fonts/Pinyon_Script/PinyonScript-Regular.ttf'
})
Font.register({
	family: "Poppins",    	
    src: '/fonts/Poppins/Poppins-Regular.ttf'
})


// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    // backgroundColor: '#FF0000F0'
  },
  headingTextSerif:{
    fontFamily: 'Helvetica',
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
    color: '#333'
  },
  headingTextCursive:{
    fontFamily: 'PinyonScript',
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
    color: '#333'
  },
  paragraphTextSans:{
    fontFamily: 'Poppins',
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
    color: '#333'
  }
});

// Create Document Component
function MyDocument({students, schoolName, schoolLogo, date}){

    return(
        <Document >
            {students.map((student,index)=>{
                return(
                    <Page size="A4" style={styles.page} key={index} orientation="landscape">                       
                            
                        <View style={styles.section}>
                            <Text style={styles.headingTextSerif}>Certificate</Text>
                            <Text style={styles.headingTextCursive}>of completion</Text>
                            <Text>Section #1</Text>
                            <Text>Student: {student.name}</Text>
                            <Text>Grade: {student.grade}</Text>
                            <Text>School: {schoolName}</Text>
                            <Text>Date: {date}</Text>
                            {/* <Text>{schoolLogo && <img src={URL.createObjectURL(schoolLogo)} alt="School Logo" />}</Text> */}
                        </View>
                        
                    </Page>
                )
            })}            
        </Document>
    )
}

export default MyDocument