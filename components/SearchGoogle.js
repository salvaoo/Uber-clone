import React from 'react';
import { StyleSheet } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { API_GOOGLE_MAPS_KEY } from "@env";
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';

const GooglePlacesInput = ({placeholder, style = '', option = ''}) => {
	const dispatch = useDispatch()
   const navigation = useNavigation()

   return (
      <GooglePlacesAutocomplete
         placeholder={placeholder}
         styles={style === 'grey' ? greyOptionStyle : defaultStyle}
         onPress={(data, details = null) => {
            console.log(data, details);  

            if (option === 'destination') {
               dispatch(setDestination({
                  location: details.geometry.location,
                  description: data.description
               }))

               navigation.navigate("RideOptionsCard")
            }else {
               dispatch(setOrigin({
                  location: details.geometry.location,
                  description: data.description
               }))
               dispatch(setDestination(null))
            }
         }}
         fetchDetails={true}
         returnKeyType={"search"}
         minLength={2}
         enablePoweredByContainer={false}
         query={{
            key: API_GOOGLE_MAPS_KEY,
            language: "en"
         }}
         nearbyPlacesAPI='GooglePlacesSearch'
         debounce={400}
      />
   );
};

export default GooglePlacesInput;

// Default style (Google autocomplete)
const defaultStyle = StyleSheet.create({
   container: {
      flex: 0,
   },
   textInput: {
      fontSize: 18,
   }
});

// Style for "to" option (Google autocomplete)
const greyOptionStyle = StyleSheet.create({
   container: {
      backgroundColor: "white",
      paddingTop: 20,
      flex: 0,
   },
   textInput: {
      backgroundColor: "#DDDDDF",
      borderRadius: 0,
      fontSize: 18,
   },
   textInputContainer: {
      paddingHorizontal: 20,
      paddingBottom: 0,
   }
});

