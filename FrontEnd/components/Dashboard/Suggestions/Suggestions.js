import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'

const Suggestions = () => {
    const { height, width } = useWindowDimensions()
  return (
    <View style={styles.container}>
      <Text>Suggestions</Text>
      <View style={{...styles.MeTimeItems, width, minHeight: 100}}>

      </View>
    </View>
  )
}

export default Suggestions

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    MeTimeItems:{
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        borderColor: 'black',
        borderRadius: 5,
        borderWidth:2
    }
})