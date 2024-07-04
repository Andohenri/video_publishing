import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '@/components/FormField'

const SignIn = () => {
   const [form, setForm] = useState({
      email: '',
      password: ''
   })
   return (
      <SafeAreaView>
         <ScrollView>
            <View>
               <Image
                  source={undefined}
                  resizeMode='contain'
               />
               <Text>Log in to Aora</Text>
            </View>
            <FormField
               title="Email"
               value={form.email}
               handleChange={(e : any) => setForm({ ...form, email: e })}
               otherStyles="mt-7"
               keyboardType="email-address"
            />
            <FormField
               title="Password"
               value={form.password}
               handleChange={(e : any) => setForm({ ...form, password: e })}
               otherStyles="mt-7"
               keyboardType="email-address"
            />
         </ScrollView>
      </SafeAreaView>
   )
}

export default SignIn