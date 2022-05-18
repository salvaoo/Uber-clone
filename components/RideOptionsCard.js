import { FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { MotiSafeAreaView, MotiView, MotiText } from 'moti'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectTravelTimeInformation } from '../slices/navSlice'

const data = [
   {
      id: "Uber-X-123",
      title: "Uber X",
      multiplier: 1,
      image: "https://links.papareact.com/3pn"
   },
   {
      id: "Uber-X-456",
      title: "Uber XL",
      multiplier: 1.2,
      image: "https://links.papareact.com/5w8"
   },
   {
      id: "Uber-X-789",
      title: "Uber LUX",
      multiplier: 1.75,
      image: "https://links.papareact.com/7pf"
   }
]

const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {
   const navigation = useNavigation()
   const [selected, setSelected] = useState(null)
   const travelTimeInformation = useSelector(selectTravelTimeInformation)

   return (
      <MotiSafeAreaView style={tw`bg-white flex-grow`}>
         <MotiView>
            <TouchableOpacity
               onPress={() => navigation.navigate('NavigateCard')}
               style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}>
               <Icon name="chevron-left" type="fontawesome" />
            </TouchableOpacity>

            <MotiText style={tw`text-center font-bold py-5 text-xl`}>Select a Ride {travelTimeInformation ? `- ${travelTimeInformation?.distance?.text}` : '' }</MotiText>
         </MotiView>

         <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            // ItemSeparatorComponent={() => (
            //    <MotiView
            //       style={[tw`bg-gray-200`, { height: 0.5 }]}
            //    />
            // )}
            renderItem={({ item: { id, title, image, multiplier }, item }) => (
               <TouchableOpacity 
                  onPress={() => setSelected(item)}
                  style={tw`flex-row items-center justify-between px-10 ${id === selected?.id && 'bg-gray-200'}`}
               >
                  <Image
                     style={{ width: 100, height: 100, resizeMode: 'contain' }}
                     source={{ uri: image }}
                  />
                  <MotiView style={tw`-ml-6`}>
                     <MotiText style={tw`text-xl font-semibold`}>{title}</MotiText>
                     <MotiText style={tw``}>{travelTimeInformation?.duration?.text}</MotiText>
                  </MotiView>
                  <MotiText style={tw`text-xl`}>

                     {new Intl.NumberFormat('en-gb', {
                        style: "currency",
                        currency: "GBP",

                     }).format( 
                        travelTimeInformation ?
                           (travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * multiplier) / 100 
                        : 0
                     )}

                  </MotiText>
               </TouchableOpacity>
            )}
         />

         <MotiView style={tw`mt-auto border-t border-gray-200`}>
            <TouchableOpacity disabled={!selected} style={tw`py-3 m-3 rounded-full ${!selected ? 'bg-gray-300' : 'bg-black'}`}>
               <MotiText style={tw`text-center text-white text-xl`}>Choose {selected?.title}</MotiText>
            </TouchableOpacity>
         </MotiView>
      </MotiSafeAreaView>
   )
}

export default RideOptionsCard