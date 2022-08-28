import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, Alert, Image, Dimensions, Modal, Pressable } from 'react-native';
import axios from "axios";

const { height, width } = Dimensions.get('screen');

export type Props = {
    city: string;
    ListRender: boolean;
    modal: boolean;
    capital: any;
};

const Hello: React.FC<Props> = ({ city, ListRender, capital, modal, navigation }) => {

    const [asteroiddetails, setasteroiddetails] = useState({})
    const [cityname, setcityname] = useState(city)
    const [ListshouldRender, setListshouldRender] = useState(ListRender)
    const [citydetails, setcitydetails] = useState([])

    const submitbutton = () => {
        axios.get(`https://restcountries.com/v3.1/name/${cityname}`)
            .then(function (response) {
                if (response.status === 404) {
                    setListshouldRender(false)
                } else if (response.status === 200) {
                    setListshouldRender(true)
                    console.log(response.data , " weather api")
                    navigation.navigate("Asteroiddetails", response.data)
                }
            })
            .catch(function (error) {
                console.log(error, "weather api error");
            });
    }


    return (
        <View style={styles.container}>
            <TextInput placeholder='Country name' onChangeText={(value) => {
                setcityname(value);
            }}></TextInput>
            <Button
                disabled={cityname ? false : true}
                title="SEARCH"
                accessibilityLabel="decrement"
                onPress={() => {
                    submitbutton()
                }}
                color="blue"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default Hello;