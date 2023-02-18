import { StyleSheet, Text, View, Button, ScrollView, Dimensions, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { BarChart } from 'react-native-chart-kit'
import WorkSleepChartView from './WorkSleepChartView/WorkSleepChartView'
import MeTime from './MeTime/MeTime'
import Profile from './Profile/Profile'
import Suggestions from './Suggestions/Suggestions'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const Dashboard = ({ navigation }) => {

    const dispatch = useDispatch()
    const { scheduledHours } = useSelector((state)=> state.hoursManagementReducer)


    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: "center" }}>
                <Button
                    onPress={()=>{navigation.push('Dashboard')}}
                    title="Dashboard"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
                <Button
                    onPress={()=>{navigation.push('Timeline')}}
                    title="Timeline"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
            <ScrollView contentContainerStyle={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
                {/* <Text>DashBoard</Text> */}
                <WorkSleepChartView />
                <MeTime />
                <Profile />
                <Suggestions />
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