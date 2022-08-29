// import React, { useState } from 'react'
// import { View, Text, SafeAreaView, Alert, StyleSheet, Image, Button, ScrollView } from 'react-native'
// import axios from "axios";

// type Props = {

// }


// const Asteroiddetails = (props: Props) => {


//   const [countrydetails, setcountrydetails] = useState()

//   const weather = (data: string) => {
//     // Alert.alert("function call.");
//     axios.get(`http://api.weatherstack.com/current?access_key=d68383d3cb470ad44cbee15ef6a94864&query=${data}`)
//       .then((response) => {
//         console.log(response?.data, "weather api response");
//         setcountrydetails(response.data)
//       })
//       .catch((error) => {
//         console.log(error, "weather api error");
//         Alert.alert("api error.", JSON.stringify(error));
//       });
//   }



//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
//       <ScrollView>
//         {props?.route?.params && props?.route?.params.map((item: any, index: number) => {
//           return (
//             <>
//               <View style={styles.card} key={index}>
//                 <View style={styles.row}>
//                   <Text >capital : {item.capital} </Text>
//                 </View>
//                 <View style={styles.row}>
//                   <Text>population : {item.population}</Text>
//                 </View>
//                 <View style={styles.row}>
//                   <Text>Lat/Long {item.latlng[0]} {item.latlng[1]} </Text>
//                 </View>
//                 <View style={styles.row}>
//                   <Text>flag  </Text>
//                   <Image source={{ uri: `${item.flags.png}` }} style={styles.image} />
//                 </View>
//                 <View >
//                   <Button
//                     title="GET CAPITAL WEATHER"
//                     accessibilityLabel="decrement"
//                     onPress={() => {
//                       weather(item.capital[0])
//                     }}
//                     color="blue"
//                   />
//                 </View>
//               </View>
//             </>
//           )
//         })}
//         {countrydetails ?
//           <View style={styles.card}>
//             <View style={styles.row}>
//               <Text>Temperature                :                   {countrydetails?.current?.temperature}</Text>
//             </View>
//             <View style={styles.row}>
//               <Text>Weather Icon                :                   <Image source={{ uri: `${countrydetails?.current?.weather_icons[0]}` }} style={styles.image} /></Text>
//             </View>
//             <View style={styles.row}>
//               <Text>wind_speed                 :                   {countrydetails?.current?.wind_speed}</Text>
//             </View>
//             <View style={styles.row}>
//               <Text>precipitation                :                   {countrydetails?.current?.precip}</Text>
//             </View>
//           </View> : null}
//       </ScrollView>
//     </SafeAreaView>
//   )
// }

// const styles = StyleSheet.create({
//   card: {
//     margin: 10,
//     // backgroundColor: 'pink',
//     padding: 10
//   },
//   row: {
//     margin: 10,
//     padding: 5,
//     borderBottomColor: 'black',
//     borderBottomWidth: 1,
//     flexDirection: 'row',
//   },
//   image: {
//     height: 30,
//     width: 30,
//   }
// })

// export default Asteroiddetails

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