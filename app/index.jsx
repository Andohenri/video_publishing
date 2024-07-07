import { StatusBar } from 'expo-status-bar'
import { ScrollView, View, Text, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

import {images} from '../constants'

const App = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="items-center justify-center w-full h-full px-4">
          <Image source={images.logo} resizeMethod='contain' />
        </View>
      </ScrollView>
      <StatusBar style='light' />
    </SafeAreaView>
  )
}

export default App