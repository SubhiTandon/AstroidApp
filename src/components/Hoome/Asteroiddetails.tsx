import React from 'react'
import { View , Text , SafeAreaView } from 'react-native'

type Props = {}

export default function Asteroiddetails({}: Props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View>
        <Text>Astroid details</Text>
        <Text>name</Text>
        <Text>nasa_jpl_url</Text>
        <Text>is_potentially_hazardous_asteroid</Text>
    </View>
    </SafeAreaView>
  )
}