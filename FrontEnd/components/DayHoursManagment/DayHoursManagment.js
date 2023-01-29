import { StyleSheet, Text, View ,Button } from 'react-native'

import React, { useState } from 'react'
import Slider from '@react-native-community/slider'

const DayHoursManagment = ({navigation}) => {
    const [hoursManagement, setHoursManagement] = useState({ work: 11, home: 3, sleep: 8 })
    const [currentSlider, setCurrentSlider] = useState(null)

    const handleHoursManagement = (value, type) => {
        const otherTypes = Object.keys(hoursManagement).filter(item => item !== type)
        if (currentSlider === type) {
            if (hoursManagement[otherTypes[0]] > 1) {
                setHoursManagement(prevState => {
                    return {
                        ...prevState,
                        [type]: value,
                        [otherTypes[0]]: value > prevState[type] ? prevState[otherTypes[0]] - 1 : prevState[otherTypes[0]] + 1
                    }
                }
                )
            } else {
                setHoursManagement(prevState => {
                    return {
                        ...prevState,
                        [type]: value,
                        [otherTypes[1]]: value > prevState[type] ? prevState[otherTypes[1]] - 1 : prevState[otherTypes[1]] + 1
                    }
                }
                )
            }
        }

    }

    return (
        <View style={styles.container}>
            <Text style={{fontSize:20, fontStyle: 'italic', marginBottom:20}}>Set Your Day</Text>
            <View>
                <Text>Work</Text>
                <Slider
                    style={{ width: 200, height: 40 }}
                    minimumValue={0}
                    maximumValue={12}
                    step={1}
                    minimumTrackTintColor="#000000"
                    maximumTrackTintColor="#000000"
                    value={hoursManagement.work}
                    onSlidingStart={(value) => { setCurrentSlider('work') }}
                    onValueChange={(value) => { handleHoursManagement(value, 'work') }}
                />
            </View>
            <View>
                <Text>home</Text>
                <Slider
                    style={{ width: 200, height: 40 }}
                    minimumValue={0}
                    maximumValue={12}
                    step={1}
                    minimumTrackTintColor="#000000"
                    maximumTrackTintColor="#000000"
                    value={hoursManagement.home}
                    onSlidingStart={(value) => { setCurrentSlider('home') }}
                    onValueChange={(value) => { handleHoursManagement(value, 'home') }}
                />
            </View>
            <View>
                <Text>sleep</Text>
                <Slider
                    style={{ width: 200, height: 40 }}
                    minimumValue={0}
                    maximumValue={12}
                    step={1}
                    minimumTrackTintColor="#000000"
                    maximumTrackTintColor="#000000"
                    value={hoursManagement.sleep}
                    onSlidingStart={(value) => { setCurrentSlider('sleep') }}
                    onValueChange={(value) => { handleHoursManagement(value, 'sleep') }}
                />
            </View>
            <View>
                <Button
                    onPress={()=>{ navigation.push('Dashboard')}}
                    title="Continue"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        </View>
    )
}

export default DayHoursManagment

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})