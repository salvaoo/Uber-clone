import { StyleSheet, TouchableOpacity } from 'react-native'
import { MotiView } from 'moti'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Map from '../components/Map';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';

const MapScreen = () => {
	const Stack = createNativeStackNavigator()
	const navigation = useNavigation()

	return (
			<MotiView>
				<TouchableOpacity
					onPress={() => navigation.navigate('HomeScreen')} 
					style={tw`absolute top-16 left-8 z-50 p-3 rounded-full bg-gray-100 shadow-lg`}>
					<Icon name="home" />
				</TouchableOpacity>

				{/* MAP */}
				<MotiView style={tw`h-1/2`}>
					<Map />
				</MotiView>
				{/* CONTENT */}
				<MotiView style={tw`h-1/2`}>
					<Stack.Navigator>
						<Stack.Screen 
              name="NavigateCard"
              component={NavigateCard}
              options={{
                headerShown: false,
              }}
            />
						<Stack.Screen 
              name="RideOptionsCard"
              component={RideOptionsCard}
              options={{
                headerShown: false,
              }}
            />
					</Stack.Navigator>
				</MotiView>
			</MotiView>
	)
}

export default MapScreen

const styles = StyleSheet.create({})