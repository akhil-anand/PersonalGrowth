import { StyleSheet, Text, View, Button, ScrollView, Dimensions, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { BarChart } from 'react-native-chart-kit'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const WorkSleepChartView = () => {

    const dispatch = useDispatch()
    const { scheduledHours, actualHours } = useSelector((state)=> state.hoursManagementReducer)

    const { height, width } = useWindowDimensions()
    const [chartData, setChartData] = useState({
        workTime: {
                labels: ["Estimated", "Actual"],
                datasets: [
                  {
                    data: [scheduledHours.work, actualHours.work]
                  }
                ]
            
        },
        sleepTime: {
                labels: ["Estimated", "Actual"],
                datasets: [
                  {
                    data: [scheduledHours.sleep, actualHours.sleep]
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
        <View>
            <View style={{ flexDirection: 'row', justifyContent: "space-around" }}>
                <View style={{ padding: 50 }}>
                    <BarChart
                        style={{
                            marginVertical: 8,
                            borderRadius: 16,
                            // margin:20
                        }}
                        data={chartData?.workTime}
                        width={width / 2.2}
                        height={height / 3}
                        yAxisSuffix="hrs"
                        chartConfig={chartConfig}
                        verticalLabelRotation={0}
                        showValuesOnTopOfBars={true}
                        fromZero={true}
                    //   verticalLabelRotation={30}
                    />
                    <Text style={{fontSize: 18}}>Work</Text>
                </View>
                <View style={{ padding: 50 }}>
                    <BarChart
                        style={{
                            marginVertical: 8,
                            borderRadius: 16,
                            // margin:20
                        }}
                        data={chartData?.sleepTime}
                        width={width / 2.2}
                        height={height / 3}
                        yAxisSuffix="hrs"
                        chartConfig={chartConfig}
                        verticalLabelRotation={0}
                        showValuesOnTopOfBars={true}
                        fromZero={true}
                    />
                    <Text style={{fontSize: 18}}>Sleep</Text>
                </View>
            </View>
        </View>
    )
}

export default WorkSleepChartView

const styles = StyleSheet.create({})