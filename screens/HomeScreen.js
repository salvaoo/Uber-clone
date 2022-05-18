import { StyleSheet, Image, FlatList } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../components/NavOptions'
import { MotiSafeAreaView, MotiView, ScrollView } from 'moti'
import GooglePlacesInput from '../components/SearchGoogle'
import NavFavourites from '../components/NavFavourites'

const HomeScreen = () => {

	return (
		<MotiSafeAreaView
			style={tw`bg-white h-full`}
			from={{
				opacity: 0,
				translateY: -300,
			}}
			animate={{
				opacity: 1,
				translateY: 0,
			}}
			transition={{
				// loop: true,
				type: 'timing',
				duration: 500,
				delay: 100,
			}}
		>
			<MotiView style={tw`p-5 android:pt-10`}>
				<Image
					style={{
						width: 100, height: 100, resizeMode: 'contain',
					}}
					source={{
						uri: 'https://links.papareact.com/gzs'
					}}
				/>

				<GooglePlacesInput 
					placeholder="Where from?"
				/>

				<NavOptions />
				<NavFavourites />
			</MotiView>
		</MotiSafeAreaView>
	)
}

export default HomeScreen

// const styles = StyleSheet.create({})