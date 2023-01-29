import { FlatList, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

const TimeLine = () => {

    const [totalTasks, setTotalTasks] = useState([])

    const [scheduleData, setScheduleData] = useState({
        work:{
            start: '10 am',
            end: '7 pm'
        },
        Sleep:{
            start: '10 pm',
            end: '6 am'
        },
    })

    const updateSequentialHrs = () => {

    }

    useEffect(() => {
        const tempData = generateSequentialHrs()
        

    }, [])
    

    const generateSequentialHrs = () => {
        const tempData = new Array(12).fill(12)

        const tempData1 = tempData.map((item, index) => [index ? index + ' pm' : '12 am', index + 1 + ' pm'])
        const tempData2 = tempData.map((item, index) => [index ? index + ' am' : '12 pm', index + 1 + ' am'])

        return [...tempData1, ...tempData2]
    }

    const renderTimeLineTasks = () => {

        return <>
            <View>
                <Text>Task at this time</Text>
                <FlatList
                    data={generateSequentialHrs()}
                    renderItem={({ item }) => <Text>Task under this list</Text>}
                />
            </View>
        </>
    }

    const getHrsItem = (value, index) => {
        const fromTime = value[0]
        const toTime = value[1]
        return (
                <View style={styles.item}>
                    <Text style={styles.title}>{fromTime + ' - ' + toTime}</Text>
                </View>
        )
    };

    const getTasksUnderHrs = () => {
        return generateSequentialHrs().map((item, index) => {
            return (
                <>
                    <View style={{borderRadius: 5, backgroundColor: 'coral', marginVertical:20, padding: 10}}>
                        <Text style={{fontSize:18}}>Tasks at time {item[0] + ' - ' + item[1]}</Text>
                        {renderTimeLineTasks()}
                    </View>
                </>
            )
        })
    }

    return (
        <View style={styles.container}>
            {/* <Text>TimeLine</Text> */}

            <View>
                <FlatList
                    data={generateSequentialHrs()}
                    renderItem={({ item, index }) => getHrsItem(item, index)}
                />
            </View>
            <ScrollView>
                <Text>Sample</Text>
                {getTasksUnderHrs()}
            </ScrollView>
        </View>
    )
}

export default TimeLine

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        // alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    item: {
        width: 200,
        backgroundColor: 'lightblue',
        paddingHorizontal: 8,
        paddingVertical: 5,
        borderRadius: 5,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
})