import { Text, TouchableOpacity, View } from "react-native";
import React from "react";

interface CustomButtonProps {
  title: string;
  handlePress: () => void;
  containerStyles?: string;
  isLoading?: boolean;
}

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  isLoading,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.8}
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center px-2 ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      <Text className="text-primary font-psemibold text-lg">{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
