import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { icons } from '@/constants'

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
   const [showPassowrd, setShowPassowrd] = useState(false)

   return (
      <View className={`space-y-2 ${otherStyles}`}>
         <Text className='text-gray-100 text-base font-pmedium'>{title}</Text>
         <View className='flex-row border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center'>
            <TextInput
               className='flex-1 font-psemibold text-white text-base'
               value={value}
               placeholder={placeholder}
               placeholderTextColor='#7b7b8b'
               onChangeText={handleChangeText}
               secureTextEntry={title === 'Password' && !showPassowrd}
            />
            {title==='Password' && (
               <TouchableOpacity onPress={() => setShowPassowrd(!showPassowrd)}>
                  <Image source={!showPassowrd ? icons.eye : icons.eyeHide} className='h-6 w-6' />
               </TouchableOpacity>
            )}
         </View>
      </View>
   )
}

export default FormField