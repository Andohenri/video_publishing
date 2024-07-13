import { View, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import EmptyState from '../../components/EmptyState'
import VideoCard from '../../components/VideoCard'
import { icons, images } from '../../constants'
import InfoBox from '../../components/InfoBox'
import { getUserPosts, signOut } from '../../lib/appwrite'
import useAppwrite from '../../lib/useAppwrite'
import { useGlobalContext } from '../../contexts/GlobalProvider'
import { router } from 'expo-router'

const Profile = () => {
  const { user, setUser, setIsLogged } = useGlobalContext();
  const { data: posts } = useAppwrite(() => getUserPosts(user.$id));

  const logout = async () => {
    await signOut();
    setUser(null);
    setIsLogged(false);
    router.replace("/sign-in");
  };


  return (
    <SafeAreaView className='bg-primary h-full'>
      <FlatList
        data={posts}
        keyExtractor={item => item.$id}
        renderItem={({ item }) => (
          <VideoCard video={item} />
        )}
        ListHeaderComponent={() => (
          <View className="w-full justify-center items-center my-6 px-4">
            <TouchableOpacity className='w-full items-end mb-4' onPress={logout}>
              <Image source={icons.logout} resizeMode='contain' className='w-6 h-6' />
            </TouchableOpacity>
            <View className="h-16 w-16 items-center justify-center border border-secondary rounded-lg">
              <Image source={user?.avatar} resizeMode='cover' className='w-[90%] h-[90%] rounded-md' />
            </View>
            <InfoBox title={user?.username} containerStyles='mt-5' titleStyles='text-lg' />
            <View className='flex-row mt-5'>
              <InfoBox title={posts?.length} subtitle='Posts' containerStyles='mr-10' titleStyles='text-xl' />
              <InfoBox title="1.2k" subtitle='Followers' titleStyles='text-xl' />
            </View>
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