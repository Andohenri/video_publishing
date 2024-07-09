import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import EmptyState from '../../components/EmptyState'
import VideoCard from '../../components/VideoCard'
import { icons, images } from '../../constants'
import InfoBox from '../../components/InfoBox'

const Profile = () => {

  const logout = () => {

  }

  return (
    <SafeAreaView className='bg-primary h-full'>
      <FlatList
        data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <VideoCard video={item} />
        )}
        ListHeaderComponent={() => (
          <View className="w-full justify-center items-center my-6 px-4">
            <TouchableOpacity classname='w-full items-end mb-10' onPress={logout}>
              <Image source={icons.logout} resizeMode='contain' className='w-6 h-6' />
            </TouchableOpacity>
            <View className="h-16 w-16 items-center justify-center border border-secondary rounded-lg">
              <Image source={images.profile} resizeMode='cover' className='w-full h-full' />
            </View>
            <InfoBox title="DjangoBona" containerStyles='mt-5' titleStyles='text-lg' />
            <View className='flex-row mt-5'>
              <InfoBox title={3} subtitle='Posts' containerStyles='mr-10' titleStyles='text-xl' />
              <InfoBox title="1.2k" subtitle='Followers' titleStyles='text-xl' />
            </View>
            <Text className='font-pmedium text-sm text-gray-100'>Search results</Text>
            <Text className='text-2xl font-psemibold text-white'>DjangoBona</Text>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState title="No video found" subtitle="No videos found for this search query" />
        )}
      />
    </SafeAreaView>
  )
}

export default Profile