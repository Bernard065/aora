import { Image, View, Text } from "react-native";
import React from "react";

interface TabBarIconProps {
  icon: any;
  color: string;
  name: string;
  focused: boolean;
}

const TabBarIcon = ({ icon, color, name, focused }: TabBarIconProps) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />

      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

export default TabBarIcon;
