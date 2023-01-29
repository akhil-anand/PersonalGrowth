import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Athelete = () => {

    const { height, width } = useWindowDimensions()

  return (
    <View style={styles.container}>
    <View style={{...styles.profileItem, width}}>
        <View style={{ flexDirection: 'row' }}>
            <MaterialCommunityIcons name='weight-lifter' style={{ color: 'black', fontSize: 18 }} />
            <Text>Athelete</Text>
        </View>
        <Text>Personal Records</Text>
    </View>
</View>
  )
}

export default Athelete

const styles = StyleSheet.create({
    container:{
        marginVertical: 10
    },
    profileItem: {
        padding: 10,
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 2
    }
})