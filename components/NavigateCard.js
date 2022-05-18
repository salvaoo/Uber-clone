import { StyleSheet, TouchableOpacity } from 'react-native'
import { MotiText, MotiSafeAreaView, MotiView } from 'moti'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import GooglePlacesInput from './SearchGoogle'
import NavFavourites from './NavFavourites'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

const NavigateCard = () => {
   const navigation = useNavigation()

   return (
      <MotiSafeAreaView style={tw`flex-1 bg-white`}>
         <MotiText
            from={{
               opacity: 0,
               translateY: 300,
            }}
            animate={{
               opacity: 1,
               translateY: 0,
            }}
            transition={{
               // loop: true,
               // type: 'timing',
               duration: 600,
               delay: 200,
            }}
            style={tw`text-center py-5 text-xl`}>Good Morning, Salvador</MotiText>
         <MotiView style={tw`border-t border-gray-200 flex-shrink`}>
            <MotiView>
               <GooglePlacesInput
                  placeholder="Where to?"
                  style='grey'
                  option='destination'
               />
            </MotiView>

            <NavFavourites />
         </MotiView>

         <MotiView style={tw`flex-row bg-white  justify-evenly py-2 mt-auto border-t border-gray-100`}>
            <TouchableOpacity
               onPress={() => navigation.navigate('RideOptionsCard')}
               style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}
            >
               <Icon name="car" type="font-awesome" color="white" size={16} />
               <MotiText style={tw`text-white text-center`}>Rides</MotiText>
            </TouchableOpacity>

            <TouchableOpacity style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}>
               <Icon name="fast-food-outline" type="ionicon" color="black" size={16} />
               <MotiText style={tw`text-center`}>Eats</MotiText>
            </TouchableOpacity>
         </MotiView>
      </MotiSafeAreaView>
   )
}

export default NavigateCard

const styles = StyleSheet.create({})