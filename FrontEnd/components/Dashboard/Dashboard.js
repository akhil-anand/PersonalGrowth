import { StyleSheet, Text, View, Button, ScrollView, Dimensions, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { BarChart } from 'react-native-chart-kit'
import WorkSleepChartView from './WorkSleepChartView/WorkSleepChartView'
import MeTime from './MeTime/MeTime'
import Profile from './Profile/Profile'

const Dashboard = ({navigation}) => {
 

    return (
        <View style={styles.container}>
        <ScrollView contentContainerStyle={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
            {/* <Text>DashBoard</Text> */}
            <WorkSleepChartView />
            <MeTime />
            <Profile />
        </ScrollView>
        </View>
    )
}

export default Dashboard

const styles = StyleSheet.create({
    container: {
        // marginHorizontal:20,
        paddingHorizontal: 20,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})