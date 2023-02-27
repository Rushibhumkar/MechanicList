import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MechanicList from './components/MechanicList'
import CusDetails from './components/CusDetails'
import DetailsSend from './components/DetailsSend'
import AcceptReq from './components/AcceptReq'

const MainFile = () => {

    const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
        screenOptions={{headerStyle: {backgroundColor: '#5D5FEF'},tabBarStyle:{backgroundColor:'#5D5FEF'},headerTitleAlign:'center'}}
    >
        <Stack.Screen name="Customer Details" component={CusDetails}/>
        <Stack.Screen name="MechanicList" component={MechanicList}/>
        <Stack.Screen name="DetailsSend" component={DetailsSend}/>
        <Stack.Screen name="AcceptReq" component={AcceptReq}/>
    </Stack.Navigator>
  )
}

export default MainFile

const styles = StyleSheet.create({})