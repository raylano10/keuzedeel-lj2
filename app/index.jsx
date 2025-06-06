import { StyleSheet, Text, View, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import {useRouter} from "expo-router";

export default function index() {
    const router = useRouter();
  return (
    <ImageBackground source={require('../assets/images/login.png')} style={styles.container}>
        <View style={styles.middle}>
             <Text style={styles.text}>Explore a 
new world with us
</Text>
        </View>
   
    <View style={styles.view}> 
        <Pressable style={styles.buttons} onPress={()=>router.push("/screens/auth/login")}>
        <Text style={styles.text2}>Login</Text>
        </Pressable>

        <Pressable style={styles.buttons} onPress={()=>router.push("/screens/auth/register")}>
        <Text style={styles.text2}>Register</Text>
        </Pressable>
    </View>
    
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingVertical: 40,
        paddingHorizontal:40,
    },
    middle:{
        flex: 1,
        justifyContent: 'center'

    },
    text: {
        color: "white",
        fontSize: 45,
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
    text2:{
            color: "white",
    },

    view: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 40,

    }
})