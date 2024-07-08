import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'

import { images } from '../../constants'
import { Link } from 'expo-router'

const SignIn = () => {
   const [form, setForm] = useState({
      email: '',
      password: ''
   })
   const [isSubmitting, setIsSubmitting] = useState(false)
   const submit = () => {

   }

   return (
      <SafeAreaView className='bg-primary h-full'>
         <ScrollView contentContainerStyle={{ height: '100%' }}>
            <View className='w-full h-full justify-center px-4'>
               <Image
                  source={images.logo}
                  resizeMode='contain'
                  className='w-[115px] h-[35px]'
               />
               <Text className='text-2xl text-white font-psemibold mt-7'>Log in to Aora</Text>
               <FormField
                  title="Email"
                  value={form.email}
                  handleChangeText={(e) => setForm({ ...form, email: e })}
                  otherStyles="mt-7"
                  keyboardType="email-address"
               />
               <FormField
                  title="Password"
                  value={form.password}
                  handleChangeText={(e) => setForm({ ...form, password: e })}
                  otherStyles="mt-7"
               />
               <CustomButton
                  title={'Sign in'}
                  handlePress={submit}
                  containerStyle={'mt-7'}
                  isLoading={isSubmitting}
               />
               <View className='justify-center pt-5 flex-row gap-2'>
                  <Text className='text-lg text-gray-100 font-pregular'>Don't have an account ?</Text>
                  <Link href={'/sign-up'} className='text-lg font-psemibold text-secondary'>Sign Up</Link>
               </View>
            </View>
         </ScrollView>
      </SafeAreaView>
   )
}

export default SignIn