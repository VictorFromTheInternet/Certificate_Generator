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
    width: '100vw',
    height: '100vh',
    backgroundColor: '#FFFFFF',                    
  },
  pageContent: {
    display: 'flex',
    flexDirection: 'column',            
    alignContent: 'center',
    justifyContent: 'center',
    maxWidth: '90%',
    height: '100vh',
    margin: '0 auto',
    padding: 20,
    // backgroundColor: 'red',
  },
  backgroundImage:{
    height: '100vh',
    width: '100vw',
    zIndex: -1,
    position: 'absolute',
    left: 0,
    top: 0,
  },
  goldFontColor:{
    color: '#ceb988'
  },
  headingTextSerif:{
    fontFamily: 'Times-Roman',
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
  },
  h1:{
    fontSize: 96
  },
  h2:{
    fontSize: 64
  },
  h3:{
    fontSize: 56
  },
  h4:{
    fontSize: 36
  },
  p:{
    fontSize: 16
  },
  flexRow:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 32,
    alignItems: 'center',
  },
  flexCol:{
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',    
  },
  negativeMarginBottom:{
    marginBottom: -8
  },
  negativeMarginTop:{
    marginTop: -8
  }


});

// Create Document Component
function MyDocument({students, schoolName, schoolLogo, date, fromName, fromTitle}){

    return(
        <Document >
            {students.map((student,index)=>{
                return(
                    <Page size="A4" style={styles.page} key={index} orientation="landscape">                       
                        {/* Background image container */}
                        <View>
                            <Image
                                style={[styles.backgroundImage]}
                                src="/images/Page Background.png" />   
                        </View>

                        {/* content container */}
                        <View style={styles.pageContent}>                        

                            {/* Certificate of, title container */}
                            <View style={[styles.flexRow]}>
                                <View style={styles.flexCol}>
                                    <Text style={[
                                        styles.headingTextSerif,
                                        styles.goldFontColor,
                                        styles.h2,
                                        styles.negativeMarginBottom
                                        ]}>
                                        CERTIFICATE
                                    </Text>
                                    <Text style={[
                                        styles.headingTextCursive,
                                        styles.goldFontColor,
                                        styles.h3,
                                        styles.negativeMarginTop
                                        ]}>
                                        of achievement
                                    </Text>
                                    <Text style={[
                                        styles.paragraphTextSans,
                                        styles.p
                                        ]}>
                                        This Certificate Is Presented To
                                    </Text>
                                </View>                                
                            </View>


                            {/* Main Text Container */}
                            <View style={[styles.flexRow]}>                                
                                <View style={styles.flexCol}>
                                        <Text style={[
                                            styles.headingTextCursive,                                 
                                            styles.h1]}>
                                                {student.name}
                                        </Text>
                                        <Text style={[
                                            styles.paragraphTextSans,
                                            styles.p
                                            ]}>
                                            This certificate is awarded in recognition of the dedication, commitment, and hard work demonstrated by the recipient. It serves as a testament to their knowledge and proficiency 
            in the subject matter.

                                        </Text> 
                                </View>                               
                            </View>

                            {/* Teacher, Logo, Date Container */}
                            <View style={styles.flexRow}> 
                                <View style={styles.flexCol}>
                                    <Text style={[                                    
                                        styles.headingTextCursive,                                 
                                        styles.h4]}>{fromName}</Text>
                                    <Text style={[
                                        styles.paragraphTextSans,
                                        styles.p
                                        ]}>{fromTitle}</Text>                                
                                </View> 

                                <View style={styles.flexCol}>
                                        {/* <Text>{schoolLogo && <img src={URL.createObjectURL(schoolLogo)} alt="School Logo" />}</Text> */}
                                </View> 

                                <View style={styles.flexCol}>
                                    <Text style={[
                                        styles.headingTextCursive,                                 
                                        styles.h4]}>{date}</Text>
                                    <Text style={[
                                        styles.paragraphTextSans,
                                        styles.p
                                        ]}>DATE AWARDED</Text>
                                </View>                                                               
                                                                                                                            
                            </View>                                               
                        
                        </View>
                    </Page>
                )
            })}            
        </Document>
    )
}

export default MyDocument