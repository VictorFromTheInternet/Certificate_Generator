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
    width: "100vw",
    height: "100vh",
    backgroundColor: "#FFFFFF",
  },
  pageContent: {
    // display: "flex",
    // flexDirection: "column",
    // alignContent: "center",
    // justifyContent: "space-between",
    maxWidth: "80%",
    height: "90vh",
    margin: "5vh auto",    
    // backgroundColor: 'red',
  },
  backgroundImage: {
    height: "100vh",
    width: "100vw",
    zIndex: -1,
    position: "absolute",
    left: 0,
    top: 0,
  },
  goldFontColor: {
    color: "#ceb988",
  },
  headingTextSerif: {
    fontFamily: "Times-Roman",
    fontSize: 24,
    marginBottom: 10,
    textAlign: "center",
    color: "#333",
  },
  headingTextCursive: {
    fontFamily: "PinyonScript",
    fontSize: 24,
    marginBottom: 10,
    textAlign: "center",
    color: "#333",
  },
  paragraphTextSans: {
    fontFamily: "Poppins",
    fontSize: 24,
    marginBottom: 10,
    textAlign: "center",
    color: "#333",
  },
  h1: {
    fontSize: 96,    
  },
  h2: {
    fontSize: 64,
  },
  h3: {
    fontSize: 48,
  },
  h4: {
    fontSize: 36,
  },
  p: {
    fontSize: 16,    
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",    
    gap: 32,    
    width: "100%",
    marginBottom: 32,
    marginTop: 32,
  },
  flexCol: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  flexGrow:{
    flexGrow: 1,
  },
  flexAlignStart: {
    alignItems: "flex-start",
  },
  flexJustifyStart: {
    justifyContent: "flex-start",
  },
  negativeMarginBottom: {
    marginBottom: -8,
  },
  negativeMarginTop: {
    marginTop: -8,
  },
  schoolLogoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",                
    height: 200,    
    width: 150,        
  },
  certBadge: {            
    height: '100%',    
    width: '100%',
    margin: "0 auto",      
  },
  schoolLogo: {
    height: 100,
    width: 100,
  },
  backgroundRed:{
    backgroundColor: "red",
  },
  backgroundBlue:{
    backgroundColor: "blue",
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
                        <View style={[styles.pageContent, styles.backgroundBlue]}>                        
                            
                            {/* Certificate of, title container */}                            
                            <View style={[styles.section, styles.backgroundRed]}>
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
                            <View style={[ styles.section, styles.backgroundRed]}>                                
                                <View style={[
                                    styles.flexCol, 
                                    styles.flexJustifyStart]}>
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
                            <View style={[styles.section, styles.backgroundRed]}> 
                                <View style={[styles.flexRow, styles.flexAlignStart]}>
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
                                        <View style={[
                                            styles.schoolLogoContainer
                                        ]}>
                                            <Image style={styles.certBadge}
                                                src="/images/Badge.png">                                            
                                            </Image>
                                            <Image style={styles.schoolLogo}>
                                                {schoolLogo && <img src={URL.createObjectURL(schoolLogo)} alt="School Logo" />}
                                            </Image>
                                        </View>                                        
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
                        
                        </View>
                    </Page>
                )
            })}            
        </Document>
    )
}

export default MyDocument