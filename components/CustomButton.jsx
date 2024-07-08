import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress, containerStyle }) => {
   return (
      <TouchableOpacity onPress={handlePress} className={`bg-secondary-100 rounded-xl min-h-[62px] justify-center items-center ${containerStyle}`}>
         <Text className='text-primary text-lg font-psemibold'>{title}</Text>
      </TouchableOpacity>
   )
}

export default CustomButton