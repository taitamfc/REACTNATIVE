import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text>TOP</Text>
      </View>
      <View style={styles.bottom}>
        <View style={styles.bottomLeft}>
            <Text>Bottom Left</Text>
        </View>
        <View style={styles.bottomRight}>
            <View style={styles.bottomRightTop}>
                <Text>Right Top</Text>
            </View>
            <View style={styles.bottomRightBottom}>
                <Text>Right Bottom</Text>
            </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#ccc'
    },
    top: {
        flex:1,
        backgroundColor:'yellow',
        justifyContent:'center',
        alignItems:'center'
    },
    bottom: {
        flex:1,
        backgroundColor:'white',
        flexDirection:'row'
    },
    bottomLeft: {
        flex:1,
        backgroundColor:'green',
        justifyContent:'center',
        alignItems:'center'
    },
    bottomRight: {
        flex:1,
        backgroundColor:'white'
    },
    bottomRightTop: {
        flex:1,
        backgroundColor:'pink',
        justifyContent:'center',
        alignItems:'center'
    },
    bottomRightBottom: {
        flex:1,
        backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center'
    }
})