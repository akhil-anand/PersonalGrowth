import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import EvilIcons from 'react-native-vector-icons/EvilIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Travel from './Travel/Travel'
import { MultiSelect } from 'react-native-element-dropdown'
import Athelete from './Athelete/Athelete'

const Profile = () => {

    const data = [
        { label: 'Travel', value: 'Travel' },
        { label: 'Athelete', value: 'Athelete' },
    ];

    const [profileType, setProfileType] = useState(['Travel'])

    const [selected, setSelected] = useState([]);

    const renderProfileItems = () => {
        console.log(selected)
        return <>
            {selected?.includes('Travel') ? <Travel /> : null}
            {selected?.includes('Athelete') ? <Athelete /> : null}
        </>
    }

    useEffect(()=>{
        renderProfileItems()
    },[selected])

    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', justifyContent:'flex-start'}}>
            <View style={{ marginLeft: 30, flexDirection: 'row', justifyContent: 'flex-start' }}>
                <EvilIcons name='user' style={{ color: 'black', fontSize: 23 }} />
                <Text style={{ fontSize: 18 }}>Profile</Text>
            </View>
            <View >
            <MultiSelect
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                search
                data={data}
                labelField="label"
                valueField="value"
                placeholder="Select item"
                searchPlaceholder="Search..."
                value={selected}
                onChange={item => {
                    setSelected(item);
                }}
                renderLeftIcon={() => (
                    <AntDesign
                        style={styles.icon}
                        color="black"
                        name="Safety"
                        size={20}
                    />
                )}
                selectedStyle={styles.selectedStyle}
            />
            </View>
            </View>
            {renderProfileItems()}
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        marginTop: 20,
        width:500,
        backgroundColor: '#fff',
        // alignItems: 'center',
        justifyContent: 'center',
    },
    dropdown: {
        height: 50,
        width: 200,
        marginStart:20,
        marginTop: -15,
        backgroundColor: 'transparent',
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
      },
      placeholderStyle: {
        fontSize: 16,
      },
      selectedTextStyle: {
        fontSize: 14,
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },
      icon: {
        marginRight: 5,
      },
      selectedStyle: {
        borderRadius: 12,
      },
})