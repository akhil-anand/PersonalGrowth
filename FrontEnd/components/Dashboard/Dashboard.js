import { StyleSheet, Text, View, Button, ScrollView, Dimensions, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { BarChart } from 'react-native-chart-kit'

const DashBoard = ({navigation}) => {

    const screenWidth = Dimensions.get("window").width;
    const { height, width } = useWindowDimensions()
    const [chartData, setChartData] = useState({
        workTime: {
                labels: ["Estimated", "Actual"],
                datasets: [
                  {
                    data: [11, 12]
                  }
                ]
            
        },
        sleepTime: {
                labels: ["Estimated", "Actual"],
                datasets: [
                  {
                    data: [8, 5]
                  }
                ]
            
        },
    })

    const chartConfig = {
        backgroundGradientFrom: "#fff",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#fff",
        backgroundGradientToOpacity: 0,
        color: (opacity = 1) => `rgba(71, 71, 226, ${opacity})`,
        strokeWidth: 1, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
      };

    return (
        <View style={styles.container}>
        <ScrollView contentContainerStyle={{ display: 'flex', justifyContent: 'center' }}>
            <Text>DashBoard</Text>
            <View style={{ flexDirection: 'row', justifyContent: "center" }}>
                <Button
                    // onPress={()=>{navigation.push('Dashboard')}}
                    title="Dashboard"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
                <Button
                    // onPress={()=>{navigation.push('Timeline')}}
                    title="Timeline"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: "space-around" }}>
                <View style={{padding:5}}>
                <BarChart
                  style={{
                    marginVertical: 8,
                    borderRadius: 16,
                    // margin:20
                  }}
                  data={chartData?.workTime}
                  width={width / 2.2}
                  height={height / 3}
                  yAxisLabel="hrs"
                  chartConfig={chartConfig}
                  verticalLabelRotation={0}
                  showValuesOnTopOfBars={true}
                  fromZero={true}
                //   verticalLabelRotation={30}
                />
                </View>
                <BarChart
                  style={{
                    marginVertical: 8,
                    borderRadius: 16,
                    // margin:20
                  }}
                  data={chartData?.sleepTime}
                  width={width / 2.2}
                  height={height / 3}
                  yAxisLabel="hrs"
                  chartConfig={chartConfig}
                  verticalLabelRotation={0}
                  showValuesOnTopOfBars={true}
                  fromZero={true}
                />
            </View>


        </ScrollView>
        </View>
    )
}

export default DashBoard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})