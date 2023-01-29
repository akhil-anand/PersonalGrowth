import { FlatList, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { useScrollIntoView, wrapScrollView } from 'react-native-scroll-into-view'

const TimeLine = () => {

    const taskRef = useRef([])

    const CustomScrollView = wrapScrollView(ScrollView)
    const scrollIntoView = useScrollIntoView()

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

    const handleScroll = (event) => {
        const positionX = event.nativeEvent.contentOffset.x;
        const positionY = event.nativeEvent.contentOffset.y;
        // console.log(positionX, positionY)
    };

    const handleScrollToView = (event, index) => {
        console.log(taskRef[index])
        scrollIntoView(taskRef[index].current)
    }

    const getHrsItem = (value, index) => {
        const fromTime = value[0]
        const toTime = value[1]
        return (
            <TouchableHighlight onPress={(event)=>{handleScrollToView(event, index)}}>
                <View style={styles.item}>
                    <Text style={styles.title}>{fromTime + ' - ' + toTime}</Text>
                </View>
            </TouchableHighlight>
        )
    };

    const getTasksUnderHrs = () => {
        return generateSequentialHrs().map((item, index) => {
            return (
                <>
                    <View ref={(element) => {taskRef.current[index] = element}}>

                        <Text>Tasks at time {item[0] + ' ' + item[1]}</Text>
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
            <CustomScrollView>
                <Text>Sample</Text>
                {getTasksUnderHrs()}
            </CustomScrollView>
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