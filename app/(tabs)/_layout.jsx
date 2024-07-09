import { Text, View, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

import { icons } from '../../constants';

const TabIcon = ({ icon, color, name, focused }) => {
   return (
      <View className="items-center justify-center gap-2">
         <Image resizeMode='contain' source={icon} tintColor={color} className="h-6 w-6" />
         <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`} style={{ color: color }}>{name}</Text>
      </View>
   )
}

const TabsLayout = () => {
   return (
      <>
         <Tabs
            screenOptions={{
               tabBarShowLabel: false,
               tabBarActiveTintColor: '#FFA001',
               tabBarInactiveTintColor: '#CDCDE0',
               tabBarStyle: {
                  backgroundColor: '#161622',
                  borderTopWidth: 2,
                  borderTopColor: '#232533',
                  height: 64
               }
            }}
         >
            <Tabs.Screen
               name="home"
               options={{
                  title: "Home",
                  headerShown: false,
                  tabBarIcon: ({ color, focused }) => (
                     <TabIcon icon={icons.home} focused={focused} color={color} name={"Home"} />
                  )
               }}
            />
            <Tabs.Screen
               name="bookmark"
               options={{
                  title: "Bookmark",
                  headerShown: false,
                  tabBarIcon: ({ color, focused }) => (
                     <TabIcon icon={icons.bookmark} focused={focused} color={color} name={"Bookmark"} />
                  )
               }}
            />
            <Tabs.Screen
               name="create"
               options={{
                  title: "Create",
                  headerShown: false,
                  tabBarIcon: ({ color, focused }) => (
                     <TabIcon icon={icons.plus} focused={focused} color={color} name={"Create"} />
                  )
               }}
            />
            <Tabs.Screen
               name="profile"
               options={{
                  title: "Profile",
                  headerShown: false,
                  tabBarIcon: ({ color, focused }) => (
                     <TabIcon icon={icons.profile} focused={focused} color={color} name={"Profile"} />
                  )
               }}
            />
         </Tabs>
         <StatusBar backgroundColor='#161622' style='light' />
      </>
   )
}

export default TabsLayout;