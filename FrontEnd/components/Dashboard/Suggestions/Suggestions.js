import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'

import Foundation from 'react-native-vector-icons/Foundation'

const Suggestions = () => {
    const { height, width } = useWindowDimensions()
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <Foundation name='comments' style={{ color: 'black', fontSize: 23 }} />
                <Text style={{ fontSize: 18, fontStyle: 'italic', marginStart: 5 }}>Suggestions</Text>
            </View>
            <View style={{ ...styles.MeTimeItems, width, minHeight: 100 }}>

            </View>
        </View>
    )
}

export default Suggestions

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        marginTop: 20,
        backgroundColor: '#fff',
        // alignItems: 'center',
        justifyContent: 'center',
    },
    MeTimeItems: {
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 2
    }
})