import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Task from './components/Task'
import Form from './components/Form'
import styles from './App.style'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.body}>
            <Text style={styles.header}>Todo list</Text>
            <ScrollView style={styles.items}>
                <Task/>
            </ScrollView>
        </View>
        <Form/>
    </SafeAreaView>
  )
}

