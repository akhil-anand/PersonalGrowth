import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DayHoursManagment from './components/DayHoursManagment/DayHoursManagment';
import Dashboard from './components/Dashboard/Dashboard';


export default function App() {

  const Stack = createNativeStackNavigator()
  return (
    // <SafeAreaView style={styles.container}>
    //   <Text>Welcome</Text>

    // </SafeAreaView>
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! Yeyy</Text>
      <StatusBar style="auto" />
      <NavigationContainer>
      <Stack.Navigator initialRouteName="DaysHoursManagement">
        <Stack.Screen
        name="DayHoursManagement"
        component={DayHoursManagment}
        options={{title: 'Set your Day'}}
        />
        <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{title: 'Dashboard'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
