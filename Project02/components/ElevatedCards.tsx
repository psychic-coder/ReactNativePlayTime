import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>

      <Text style={styles.headingText}> Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>Me</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>to</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>Scroll</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>More...</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>!!!!!</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:23,
        fontWeight:"bold",
        paddingHorizontal:8
    },
    card:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        width:100,
        borderRadius:10,
        margin:8,
        height:100,



    },
    cardElevated:{
        backgroundColor:"#cad5ed",
        elevation:4,
        shadowOffset:{
            width:5,
            height:5,
        },
        shadowColor:"red",
        shadowOpacity:0.3,
        shadowRadius:5,
    },
    container:{
        padding:9,

    }
})