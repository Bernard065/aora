import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

const HomeScreen = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl">Home Page</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{ color: "red" }}>
        Go to Profile Page
      </Link>
    </View>
  );
};

export default HomeScreen;
