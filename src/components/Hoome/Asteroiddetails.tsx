import React from 'react'
import { View , Text , SafeAreaView } from 'react-native'

type Props = {}

const Asteroiddetails = (props: Props) => {

  console.log(props?.route?.params?.nasa_jpl_url , "props in astrooid") 

  

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View>
        <Text>Astroid details</Text>
        <Text>name : - {props?.route?.name}</Text>
        <Text>nasa_jpl_url : - {props?.route?.params?.nasa_jpl_url}</Text>
        <Text>is_potentially_hazardous_asteroid : - {props?.route?.params?.is_potentially_hazardous_asteroid  == true ? "true" : "false"}</Text>
    </View>
    </SafeAreaView>
  )
}

export default Asteroiddetails