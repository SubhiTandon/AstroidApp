import React, { useEffect , useState }  from 'react';
import { Button, StyleSheet, Text, View, TextInput, Alert, Image, Dimensions, Modal, Pressable } from 'react-native';
import axios from "axios";

const { height, width } = Dimensions.get('screen');

export type Props = {
    city: string;
    ListRender: boolean;
    modal: boolean;
    capital: any;
};

const Hello: React.FC<Props> = ({ city, ListRender, capital, modal , navigation }) => {

    const [astroidid, setastroidid] = useState(city)
    const [showlogic, setshowlogic] = useState(false)
    const [asteroiddetails , setasteroiddetails] = useState({})

    const submitbutton = (data : any) => {
        axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${data}?api_key=BOGCU1F4Qm8pYhyWdVJscsT0PC8RnbyEc9gr2RuL`)
            .then(function (response) {
                console.log(response.data , "??????????") 
                setasteroiddetails(response.data)
                navigation.navigate("Asteroiddetails" , response.data )
            })
            .catch(function (error) {
                console.log(error, "weather api error");
            });
    }

    const RandomAstroid = (data: string) => {
        // Alert.alert("function call.");
        axios.get(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY`)
            .then((response) => {
                var astro = response?.data?.near_earth_objects
                var randAst = astro[Math.floor(Math.random() * astro.length)];
                console.log(randAst?.id , "api astroid response")
                submitbutton(randAst?.id)
            })
            .catch( (error) => {
                console.log(error, "asteroid error");
            });
    }


    return (
        <View style={styles.container}>
            <View >
                <Text style={styles.greeting}>
                    Welcome to Weather App
                </Text>
                <TextInput placeholder='Enter Astroid iD' onChangeText={(value) => {
                    setastroidid(value);
                    if (value.length > 0) {
                        setshowlogic(false)
                    } else {
                        setshowlogic(true)
                    }
                }}></TextInput>
                <View>
                    <Button
                        disabled={showlogic}
                        title="Submit"
                        accessibilityLabel="decrement"
                        onPress={() => { 
                            submitbutton(astroidid)
                        }}
                        color="red"
                    />
                </View>

                <View style={{ marginTop: 10}}>
                    <Button
                        title="Random Astroid"
                        accessibilityLabel="decrement"
                        onPress={() => { RandomAstroid()}}
                        color="red"
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center'
    },
    greeting: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 16
    },
    list: {
        height: height / 1,
        width: width / 1.1,
        // backgroundColor: 'pink',
        marginTop: 10,
    },
    card: {
        margin: 10,
        backgroundColor: 'pink',
        flexDirection: 'row',
        padding: 10
    },
    subview: {
        margin: 10,
    },
    button: {
        margin: 10,
    },
    image: {
        height: 130,
        width: 120,
    },

    /// modal design
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // marginTop: 20,
        backgroundColor: '#eae9ee',
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        flexDirection: 'row',
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }


});

export default Hello;