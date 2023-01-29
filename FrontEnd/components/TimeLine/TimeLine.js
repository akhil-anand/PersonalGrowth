import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const TimeLine = () => {

    const generateSequentialHrs = () => {
        
        const tempData = new Array(12).fill(12)

        const tempData1 = tempData.map((item, index) => [index ? index : 12, index + 1])
        const tempData2 = tempData.map((item, index) => [index ? index : 12, index + 1])

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

      const getHrsItem = (value) => {
        console.log(value)
        const fromTime = value[0]
        const toTime = value[1]
        return (
        <View style={styles.item}>
          <Text style={styles.title}>{fromTime + ' - ' + toTime}</Text>
        </View>
        )
        };
    
        const getTasksUnderHrs = () => {
            generateSequentialHrs().map(item => {
                return(
                    <>
                    <Text>Tasks at time {item[0] + ' ' + item[1]}</Text>
                    {renderTimeLineTasks()}
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
        renderItem={({item}) => getHrsItem(item)}
        />
      </View>
      <View>
        <Text>Sample</Text>
            {getTasksUnderHrs()}
      </View>
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
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
      },
})