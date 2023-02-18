import { StyleSheet, Text, View, Button } from 'react-native'

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Slider from '@react-native-community/slider'
import { useDispatch } from 'react-redux'
import { SET_HOURS } from '../../store/Reducers/hoursManagementReducer'

const DayHoursManagment = ({ navigation }) => {

    const dispatch = useDispatch()
    const { scheduledHours } = useSelector((state)=> state.hoursManagementReducer)

    const [hoursManagement, setHoursManagement] = useState({})
    const [currentSlider, setCurrentSlider] = useState(null)

    useEffect(()=>{
        setHoursManagement(scheduledHours)
    },[])


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
            <Text style={{ fontSize: 20, fontStyle: 'italic', marginBottom: 20 }}>Set Your Day</Text>
            <View>
                <View style={styles.sliderTitle}>
                    <Text>Work</Text>
                    <Text>{hoursManagement.work}</Text>
                </View>
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
                <View style={styles.sliderTitle}>
                    <Text>home</Text>
                    <Text>{hoursManagement.home}</Text>
                </View>
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
                <View style={styles.sliderTitle}>
                    <Text>sleep</Text>
                    <Text>{hoursManagement.sleep}</Text>
                </View>
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
            <View style={styles.sliderTitle}>
                <Text>{(hoursManagement.work + hoursManagement.home + hoursManagement.sleep) === 24 ? 'slider values are correct' : 'slider values are incorrect' }</Text>
                <Text>:{hoursManagement.work + hoursManagement.home + hoursManagement.sleep}</Text>
            </View>
            <View>
                <Button
                    onPress={() => { dispatch(SET_HOURS(hoursManagement)) ;navigation.push('Dashboard') }}
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
    },
    sliderTitle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})