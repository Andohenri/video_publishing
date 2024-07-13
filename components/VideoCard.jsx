import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { icons, images } from '../constants'
import { ResizeMode, Video } from 'expo-av'

const VideoCard = ({ video: { title, thumbnail, video, creator } }) => {
   const [play, setPlay] = useState(false)

   return (
      <View className='flex-col px-4 mb-14 items-center'>
         <View className='flex-row gap-3 items-start'>
            <View className='flex-1 flex-row justify-center items-center'>
               <View className='w-[46px] h-[46px] rounded-lg border border-secondary justify-center items-center p-0.5'>
                  <Image source={images.profile} resizeMode={'cover'} className='h-full w-full rounded-lg' />
               </View>
               <View className='flex-1 justify-center ml-3 gap-y-1'>
                  <Text numberOfLines={1} className='text-white font-psemibold text-sm'>{title}</Text>
                  <Text numberOfLines={1} className='text-gray-100 font-pregular text-xs'>{creator}</Text>
               </View>
            </View>
            <View className='pt-2'>
               <Image source={icons.menu} resizeMode='contain' className='h-5 w-5' />
            </View>
         </View>
         {play ? (
            <Video
               source={{ uri: video }}
               className="w-full h-60 rounded-xl mt-3"
               resizeMode={ResizeMode.CONTAIN}
               useNativeControls
               shouldPlay
               onPlaybackStatusUpdate={(status) => {
                  if (status.didJustFinish) {
                     setPlay(false);
                  }
               }}
            />
         ) : (
            <TouchableOpacity
               activeOpacity={0.7}
               onPress={() => setPlay(true)}
               className='relative justify-center items-center w-full h-60 rounded-xl mt-3'
            >
               <Image source={thumbnail} resizeMode='cover' className='w-full h-full rounded-xl mt-3' />
               <Image source={icons.play} resizeMode='contain' className='w-12 h-12 absolute' />
            </TouchableOpacity>
         )}
      </View>
   )
}

export default VideoCard