import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'

import IonIcons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const MeTime = () => {
    const { height, width } = useWindowDimensions()
  return (
    <View style={styles.container}>
      <Text style={{marginLeft:30, marginRight:'auto', marginBottom:5, fontSize: 18}}>MeTime</Text>
      <View style={{...styles.MeTimeItems, width, minHeight: 100}}>
      <View style={{ flexDirection: 'row', justifyContent: "center", marginRight: 20 }}>
        <IonIcons name='game-controller-outline' style={{ color: 'red', fontSize: 20 }} />
        <Text>Hobbies</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: "center", marginRight: 20 }}>
        <Feather name='book' style={{ color: 'green', fontSize: 20 }} />
        <Text>Reading</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: "center", marginRight: 20 }}>
        <MaterialCommunityIcons name='weight-lifter' style={{ color: 'blue', fontSize: 20 }} />
        <Text>Exercise</Text>
      </View>
      </View>
    </View>
  )
}

export default MeTime

const styles = StyleSheet.create({
    container: {
        flex: 1,
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