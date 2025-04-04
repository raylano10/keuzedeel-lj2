import { StyleSheet, Text, View, ImageBackground, Pressable, TextInput } from 'react-native'
import React from 'react'
import {useRouter} from "expo-router";

export default function Login() {
    const router = useRouter();
  return (
    <ImageBackground source={require('../../../assets/images/registertrue.png')} style={styles.container}>
            
        <View style={styles.view}>

        <TextInput style={styles.input}>Username</TextInput>

        <TextInput style={styles.input}>E-mail Adress</TextInput>

        <TextInput style={styles.input}>Password</TextInput>

            <TextInput style={styles.input}>Confirm Password</TextInput>

            <Pressable style={styles.buttons}>
                <Text style={styles.text}>Login</Text>
            </Pressable>

            <Pressable style={styles.buttons2} onPress={()=>router.push("/screens/auth/login")}>
                <Text style={styles.text}>already have an account? sign in?</Text>
            </Pressable>

        </View>
    
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 40,
        paddingHorizontal: 40,
    },

    text: {
        color: "white",
        fontSize: 19,
        padding: 10
    },

    buttons: {
        padding: 10, 
        backgroundColor: "black",
        borderRadius: 5,
        width: "100%",
        alignItems: 'center',
        marginVertical: 10,
    },

    view: {
        flex: 1, // Zorgt ervoor dat de View de hele ruimte inneemt
        justifyContent: 'flex-end', // Duwt de inhoud van de View naar beneden
        alignItems: 'center' // Zorgt ervoor dat de knop gecentreerd blijft
    },

    input: {
        width: "100%",
        borderRadius: 5,
        backgroundColor: "white",
        height: 45,
        padding: 10,
        marginVertical: 5,
        
        



    }


});