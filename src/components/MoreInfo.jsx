import { ScrollView, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'


const MoreInfo = ({navigation,route}) => {

    const mechanic = route.params.mechanic

  return (
    <ScrollView>
        <View style={styles.mainCont}>
            <View style={[styles.titleCont]}>
                <Image 
                    style={styles.imgStyle}
                    source={mechanic.img}
                />
                <View style={styles.title}>
                    <Text style={styles.titleText} >{mechanic.name}</Text>
                    <Text style={styles.titleText} >{mechanic.compname}</Text>
                    <Text style={styles.titleText} >{mechanic.location}</Text>
                    <Text style={styles.titleText} >Id :{mechanic.UID}</Text>
                </View>
            </View>
            <View style={[styles.expCont]}>
                <Text style={[styles.tb,{fontSize:20}]}>Experience: 5years</Text>
                <Text style={[styles.tb,{paddingHorizontal:10}]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque commodi eaque ut! Consequatur, obcaecati provident amet aspernatur corrupti fugiat eos.</Text>
            </View>
            <View style={[styles.contactDetailsCont]}>
                <Text style={[styles.tb,{fontWeight:'bold',fontSize:22}]}>Contact Details</Text>
                <View style={{paddingHorizontal:10}}>
                    <Text style={[styles.tb]}>Address :Road name ,near xyz ,east wing ,New Delhi-431206</Text>
                    <Text style={[styles.tb]}>Mob No. :{mechanic.phoneNum}</Text>
                    <Text style={[styles.tb]}>Email ID :companyxyz@gmail.com</Text>
                </View>
            </View>
            <View style={styles}>
                <Text style={[styles.tb,{fontWeight:'bold',fontSize:22,marginBottom:10}]}>Services</Text>
                <View style={styles.servicesCont}>
                    <Text style={[styles.tb,styles.border]}>Engine Repair</Text>
                    <Text style={[styles.tb,styles.border]}>Cleanign</Text>
                    <Text style={[styles.tb,styles.border]}>Fuel & Oil</Text>
                    <Text style={[styles.tb,styles.border]}>AC Service & Repair</Text>
                    <Text style={[styles.tb,styles.border]}>Cleaning</Text>
                </View>
            </View>
            <View style={styles.minChargeCont}>
                <Text style={[styles.tb,{fontWeight:'bold',fontSize:22,marginBottom:7}]}>Minimum Charge</Text>
                <Text style={[styles.tb,{paddingHorizontal:10}]}>Starting 350.Rs Onwards</Text>
            </View>
            <View style={styles.reviewCont}>
                <Text style={[styles.tb,{fontWeight:'bold',fontSize:22}]}>Uer Reviews</Text>
                <View style={styles.reviewCont}>
                    <Text style={[styles.tb,styles.reviewTxt]}>Name Of User</Text>
                    <Text style={[styles.tb,styles.reviewTxt]}>Rating Of User</Text>
                    <Text style={[styles.tb,styles.reviewTxt]}>Date of Service</Text>
                    <Text style={[styles.tb,styles.reviewTxt]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi fugit autem, sed provident consectetur ad eum dicta magnam! Aut, corrupti?</Text>
                </View>
            </View>
        </View>
    </ScrollView>
  )
}

export default MoreInfo

const styles = StyleSheet.create({
    tb:{
        color:'black'
    },
    mainCont:{
        paddingHorizontal:15,
        paddingVertical:10
    },
    titleText:{
        color:'black',
        fontSize:20,
        fontWeight:'bold'
    },
    titleCont:{
        flexDirection:'row',
        marginTop:10,
        marginBottom:10,
        paddingBottom:10,
        borderBottomWidth:1
    },
    imgStyle:{
        width:'30%',
        height:'100%',
        borderRadius:50,
        borderWidth:0.2,
        borderColor:'black',
        marginRight:10,
    },
    minChargeCont:{
        marginVertical:5,
        borderBottomWidth:1,
        paddingBottom:10
    },
    expCont:{
        marginTop:5,
        marginVertical:5,
        borderBottomWidth:1,
        paddingBottom:5,
    },
    contactDetailsCont:{
        marginVertical:5,
        borderBottomWidth:1,
        paddingBottom:5,
        
    },
    reviewTxt:{
        paddingHorizontal:10
    },
    servicesCont:{
        paddingHorizontal:10,
        flexDirection:'row',
        flexWrap:'wrap',
        paddingBottom:5,
        borderBottomWidth:1,
    },
    border:{
        borderColor:'grey',
        paddingHorizontal:8,
        paddingVertical:4,
        borderWidth:0.6,
        marginHorizontal:4,
        marginBottom:4,
        borderRadius:8,
    }
})