import { FlatList, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

const TimeLine = () => {

    const [totalTT, setTotalTT] = useState([])

    const [scheduleData, setScheduleData] = useState({
        work:{
            start: '10 am',
            end: '7 pm'
        },
        sleep:{
            start: '10 pm',
            end: '6 am'
        },
    })

    const updateSequentialHrs = () => {

    }

    useEffect(() => {
        const tempData = generateSequentialHrs()
        
        let workIndex1 = tempData.findIndex(item => item[0] === scheduleData?.work?.start)
        let workIndex2 = tempData.findIndex(item => item[1] === scheduleData?.work?.end)

        let arrIndexWork;
        let arrIndexSleep;

        if(workIndex2 < workIndex1){
            arrIndexWork = [ ...Array.from({length: tempData.length - workIndex1}, (_, index) => index + workIndex1) , ...Array.from({length: workIndex2}, (_, index) => index )].sort(function(a, b){return a - b});
        }else{
            arrIndexWork = Array.from({length: workIndex2 - workIndex1}, (_, index) => index + workIndex1);
        }

        tempData.splice(workIndex1, workIndex2 - workIndex1, ...tempData.slice(workIndex1, workIndex2).map(item => [...item, 'work']))

        let sleepIndex1 = tempData.findIndex(item => item[0] === scheduleData?.sleep?.start)
        let sleepIndex2 = tempData.findIndex(item => item[1] === scheduleData?.sleep?.end)
        // tempData.splice(sleepIndex1, sleepIndex2 - sleepIndex1, ...tempData.slice(sleepIndex1, sleepIndex2).map(item => [...item, 'sleep']))

        if(sleepIndex2 < sleepIndex1){
            arrIndexSleep = [ ...Array.from({length: tempData.length - sleepIndex1}, (_, index) => index + sleepIndex1) , ...Array.from({length: sleepIndex2}, (_, index) => index )].sort(function(a, b){return a - b});
        }else{
            arrIndexSleep = Array.from({length: sleepIndex2 - sleepIndex1}, (_, index) => index + sleepIndex1);
        }



        setTotalTT(tempData.map((item, index) => {
            if(arrIndexWork.includes(index)){
                return [
                    ...item,
                    'work',
                    index
                ]
            }else if(arrIndexSleep.includes(index)){
                return [
                    ...item,
                    'sleep',
                    index
                ]
            }else if(index > workIndex2 && index < sleepIndex1){
                return [
                    ...item,
                    'home',
                    index
                ]
            }else{
                return [
                    ...item,
                    'home1',
                    index
                ]
            }
        }))

    }, [])
    

    const generateSequentialHrs = () => {
        const tempData = new Array(12).fill(12)

        const tempData1 = tempData.map((item, index) => [index ? index + ' pm' : '12 am', index + 1 === 12 ? index + 1 + ' am' : index + 1 + ' pm'])
        const tempData2 = tempData.map((item, index) => [index ? index + ' am' : '12 pm', index + 1 === 12 ? index + 1 + ' pm' : index + 1 + ' am'])

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
            <ScrollView style={{flexDirection:'column'}}>
            <View style={{backgroundColor: 'red', borderRadius: 10, paddingTop: 10}}>
                <Text>Work Time</Text>
                <FlatList
                    // data={[ ...totalTT.filter((item, index, arr) => item[2] === 'work' && item[3] < arr[0]?.[3] ) ,...totalTT.filter((item, index, arr) => item[2] === 'work' && item[3] > arr[0]?.[3] )]}
                    data={totalTT.filter((item, index, arr) => item[2] === 'work' )}
                    renderItem={({ item, index }) => getHrsItem(item, index)}
                />
            </View>
            <View style={{backgroundColor: 'purple', borderRadius: 10, paddingTop: 10}}>
            <Text>Home Time</Text>
                <FlatList
                    data={totalTT.filter(item => item[2] === 'home' )}
                    renderItem={({ item, index }) => getHrsItem(item, index)}
                />
            </View>
            <View style={{backgroundColor: 'green', borderRadius: 10, paddingTop: 10}}>
            <Text>Sleep Time</Text>
                <FlatList
                    data={totalTT.filter(item => item[2] === 'sleep' )}
                    renderItem={({ item, index }) => getHrsItem(item, index)}
                />
            </View>
            <View style={{backgroundColor: 'yellow', borderRadius: 10, paddingTop: 10}}>
            <Text>Home Time 2</Text>
                <FlatList
                    data={totalTT.filter(item => item[2] === 'home1' )}
                    renderItem={({ item, index }) => getHrsItem(item, index)}
                />
            </View>
            </ScrollView>
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