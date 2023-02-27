import {  StyleSheet, Text, TextInput,Alert, TouchableOpacity,ScrollView, View } from 'react-native'
import React,{useState,useEffect} from 'react'

const CusDetails = ({navigation,route}) => {

    // const [first, setfirst] = useState(second)
    const [problem,setProblem] = useState(false)
    // const [submit,setSubmit] = useState(false)

  return (
    <ScrollView style={{flex:1}}>
    <View style={[styles.mainCont]}>
      <Text style={[styles.txt,styles.lfStyle]}>Write Your Problem Here...</Text>
      
    </View>
    <View style={[styles.inputCont,styles.mainCont]} >
      <View style={[styles.row,styles.ipSection]} >
          <Text style={[styles.ipText,styles.gtxt]} >Name : </Text>
          <TextInput 
          style={[styles.ipStyle,styles.emailInput]} 
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Rushikesh Bhumkar"
          placeholderTextColor='grey'
        //   value={userName}
        //   onChangeText={(actualData) => setUserName(actualData)}
          />
          
      </View>
      <View style={[styles.row,styles.ipSection]}>
          <Text style={[styles.ipText,styles.gtxt]} >Type of Vehicle</Text>
          <TextInput  
          style={[styles.ipStyle,styles.passwordStyle]} 
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Enter Vehicle type here..."
          placeholderTextColor='grey'
        //   value={password}
        //   onChangeText={(actualData)=>setPassword(actualData)}
          />

      </View>
      <View style={[styles.row,styles.ipSection]}>
          <Text style={[styles.ipText,styles.gtxt]} >Vehicle Problem :</Text>
          <TextInput  
          style={[styles.ipStyle,styles.problemTextIp]} 
          autoCapitalize="none"
          autoCorrect={false}
          multiline={true}
          numberOfLines={5}
          placeholder="Type problem here..."
          placeholderTextColor='grey'
          value={problem}
          onChangeText={setProblem}
          />

      </View>
        <View style={[styles.row,styles.ipSection]} >
            <Text style={[styles.ipText,styles.gtxt]} >Location : </Text>
              <TextInput 
              style={[styles.ipStyle]} 
              autoCapitalize="Location"
              autoCorrect={false}
              placeholder="Location..."
              placeholderTextColor='grey'
            //   value={userName}
            //   onChangeText={(actualData) => setUserName(actualData)}
              />
        </View>
    </View>
    <View style={[styles.row,styles.center]}>
    {/* <TouchableOpacity style={[styles.loginbtn,
          {
              backgroundColor: isSelected ? '#5ECB95' : '#B5EECA' 
          }]}
          disabled={!isSelected}
          onPress={()=> submit()}
    >
      <Text style={[styles.btnText]}>Log in</Text>
    </TouchableOpacity> */}
    {/* <View style={[styles.row,styles.mTop]}>
      <Text style={[styles.gtxt]}>Doesn't have an account yet?</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('SignUp',{})}>
        <Text style={[styles.signUpText]}>Sign Up</Text>
      </TouchableOpacity>
    </View> */}
    <TouchableOpacity
        onPress={()=>{navigation.navigate('MechanicList',{problem})}}
        style={[styles.acceptBtn]}
    >
        <Text style={styles.cw}>Submit</Text>
    </TouchableOpacity>
    </View>
  

  </ScrollView>
  )
}

export default CusDetails

const styles = StyleSheet.create({
    
    txt:{
        color:'black'
    },
    col:{
        display:"flex",
        flexDirection: "column",
    },
    gtxt:{
       color:'black'
    },
    btnText:{
        color:'white',
        fontSize:22,
        paddingHorizontal:40,
        paddingVertical:10,
        
    },
    shareLocBtn:{
      backgroundColor: '#5ECB95',
      alignItems:"center",
      justifyContent:"center",
      paddingVertical:2,
      borderRadius:5,
      paddingHorizontal:4
    },
    cw:{
        color:"#fff"
    },
    acceptBtn:{
        backgroundColor:'#5D5FEF',
        marginVertical:10,
        paddingVertical:10,
        paddingHorizontal:25,
        borderRadius:10 ,
    },
    row:{
        display:'flex',
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'space-between'
    },
    lastRow:{
        display:'flex',
        flexDirection:"row",
        alignItems:'center',
    },

    textStyle:{
        marginVertical:15,
        fontSize:16
    },
    lfStyle:{
        fontWeight:'bold',
        fontSize:25,
        color:'#504A4B'
    },
    signUpText:{
        color:'#5ECB95',

    },
    mTop:{
        marginTop:20,
    },
    center:{
        marginVertical:10,
        justifyContent:'center'
    },
    ipText:{
        marginBottom:10,
        fontSize:14
    },
    mainCont:{
        marginHorizontal:25,
        marginVertical:20
    },
    ipStyle:{
        color:'black',
        height:40,
        borderBottomWidth:2,
        borderColor:'none',
        // backgroundColor:'#AB9EFF',
        borderBottomColor:'#b3d9ff',
        borderRadius:8,
        placeholderTextColor:'#333',
        paddingHorizontal:10,
        width:'60%',
      },
      loginbtn:{
        borderRadius:50
      },
      ipSection:{
        marginVertical:15,
      },
      lastCont:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginLeft:10,
        borderBottomWidth:2,
        borderRadius:8,
        borderBottomColor:'#b3d9ff',


      },
      lastInnCont:{
        marginRight:50,
        marginLeft:10,
        alignItems:'center',
        // justifyContent:'flex-start',
      },
      // shareLocTxt:{
      //   fontSize:10,
      //   padding:10
      // }
      problemTextIp:{
        height:40
      }
})