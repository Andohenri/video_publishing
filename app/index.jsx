import { StatusBar } from 'expo-status-bar'
import { ScrollView, View, Text, Image } from 'react-native'
import React from 'react'
import { Redirect, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '../constants'
import CustomButton from '../components/CustomButton'

const App = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="items-center justify-center w-full h-full px-4">
          <Image className='w-[130px] h-[84px]' source={images.logo} resizeMode='contain' />
          <Image className='max-w-[380px] w-full h-[300px]' source={images.cards} resizeMode='contain' />
          <View className="relative mt-5">
            <Text className='text-4xl text-white font-bold text-center'>
              Discover endless possibilities with{' '}
              <Text className='text-secondary-200'>Aora</Text>
            </Text>
            <Image className='w-[136px] h-[15px] absolute -bottom-2 -right-8' source={images.path} resizeMode='contain' />
          </View>
          <Text className='font-pregular text-sm text-gray-100 mt-5 text-center'>Where creativity meets the innovation: embark on a journey of limitless exploration with Aora</Text>
          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push('/sign-in')}
            containerStyle='w-full my-7'
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
  )
}

export default App