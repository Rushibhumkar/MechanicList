import { StyleSheet, Text, TouchableOpacity, View,ScrollView,Linking } from 'react-native'
import React ,{useState} from 'react'
import { Icon } from 'react-native-vector-icons/AntDesign'
import mechanics from '../data/MecData'
// import Modal from "react-native-modal";


const MechanicList = ({navigation,route}) => {
    // const [bookings, setBookings] = useState([])

    // useEffect(() => {
    //     setBookings(mechanics.filter((item)=>{
    //         return item.status=== Location 
    //     }))

    // }, [])

    // const [textShown, setTextShown] = useState(false);

    const {problem} = route.params;

    // const [textShown, setTextShown] = useState(false)
    

  return (
    <ScrollView>
      {mechanics.map((item)=>  
        <View style={[styles.mainCont]}
            key={item.UID}
        >
                <View style={styles.dataCont}>
                    <View style={styles.dataCont}>
                        <Text style={styles.name}>Name : {item.name}</Text>
                        <Text style={styles.distance}>Rating : {item.rating}</Text>
                        <Text style={styles.location}>Location : {item.location}</Text>
                        <Text style={styles.phoneNum}>Mobile No : {item.phoneNum}</Text>
                    </View>
                </View>
                <View style={[styles.center]}>
                    <TouchableOpacity
                        onPress={()=>navigation.navigate('MoreInfo',{mechanic:item})}
                        style={[styles.showMoreCont]}
                    >
                        <Text style={styles.showMoreTxt}>Show More Details...</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>{
                            Linking.openURL(`whatsapp://send?phone=${item.phoneNum}&text=Problems:\n${problem}`)
                        }}
                        style={[styles.acceptBtn]}
                    >
                        <Text style={styles.cw}>Hire Mechanic</Text>
                    </TouchableOpacity>
                </View>
        </View>
      )}
        
    </ScrollView>
  )
}

export default MechanicList

const styles = StyleSheet.create({
    buttons:{
        flexDirection:'row'
    },
    name:{
        color:'black',
    },
    distance:{
        color:"black"
    },
    location:{
        color:'black'
    },
    phoneNum:{
        color:'black'
    },
    mainCont:{
        backgroundColor:"#DBD6FF",
        marginHorizontal:10,
        marginTop:10,
        borderRadius:10

        
    },
    cw:{
        color:'#fff',
        fontWeight:'bold'
    },
    row:{
        flexDirection:'row',
        justifyContent:'flex-end',
    },
    acceptBtn:{
        backgroundColor:'#5D5FEF',
        borderRadius:10,
        paddingHorizontal:20,
        paddingVertical:8,
        marginRight:8,
        marginBottom:8
    },
    dataCont:{
        marginLeft:10,
        marginTop:5
    },
    center:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    showMoreCont:{
        paddingHorizontal:20,
        paddingVertical:8,
        marginRight:8,
        marginBottom:8
    },
    showMoreTxt:{
        color:'blue'
    }

})