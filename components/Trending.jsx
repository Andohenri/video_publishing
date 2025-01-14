import { useState } from "react";
import { ResizeMode, Video } from "expo-av";
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from "react-native-reanimated";

import { FlatList, Image, ImageBackground, TouchableOpacity } from "react-native";
import { icons, images } from "../constants";

const TrendingItem = ({ activeItem, item }) => {
  const [play, setPlay] = useState(false);
  const scale = useSharedValue(0.9);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value = withTiming(activeItem === item.$id ? 1 : 0.9, { duration: 500, easing: Easing.bezier(0.5, 0.01, 0, 1) }) }]
    }
  })

  return (
    <Animated.View
      style={[{marginRight: "1.25rem"}, animatedStyles]}
    >
      {play ? (
        <Video
          source={{ uri: item.video }}
          className="w-52 h-72 rounded-[33px] mt-3 bg-white/10"
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
          className="relative flex justify-center items-center"
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
        >
          <ImageBackground
            source={item.thumbnail}
            className="w-52 h-72 rounded-[33px] mt-3 overflow-hidden shadow-lg shadow-black/40"
            resizeMode="cover"
          />

          <Image
            source={icons.play}
            className="w-12 h-12 absolute"
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </Animated.View>
  );
};

const Trending = ({ posts }) => {
  const [activeItem, setActiveItem] = useState(posts[0]);

  const viewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveItem(viewableItems[0].key);
    }
  };

  return (
    <FlatList
      data={posts}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TrendingItem activeItem={activeItem} item={item} />
      )}
      onViewableItemsChanged={viewableItemsChanged}
      viewabilityConfig={{
        itemVisiblePercentThreshold: 70,
      }}
      contentOffset={{ x: 170 }}
    />
  );
};

export default Trending;
