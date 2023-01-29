import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'

import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Travel = () => {

    
    const { height, width } = useWindowDimensions()

    return (
        <View style={styles.container}>
            <View style={{...styles.profileItem, width}}>
                <View style={{ flexDirection: 'row' }}>
                    <FontAwesome name='plane' style={{ color: 'black', fontSize: 18 }} />
                    <Text>Travel</Text>
                </View>
                <Text>Places Visited</Text>
            </View>
        </View>
    )
}

export default Travel

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