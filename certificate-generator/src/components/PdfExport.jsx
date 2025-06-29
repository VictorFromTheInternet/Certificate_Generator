import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
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