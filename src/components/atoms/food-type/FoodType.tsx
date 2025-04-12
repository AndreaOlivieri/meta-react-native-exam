import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { COLORS } from "@/src/constants/color-palette";

type FoodTypeProps = {
  type: {
    name: string;
  };
  isSelected: boolean;
  onPress: () => void;
};

const FoodType = ({ type, isSelected, onPress }: FoodTypeProps) => {
  return (
    <Pressable
      style={[
        styles.foodTypeContainer,
        isSelected && styles.foodTypeContainerSelected,
      ]}
      onPress={onPress}
    >
      <Text
        style={[styles.foodTypeText, isSelected && styles.foodTypeTextSelected]}
      >
        {type.name}
      </Text>
    </Pressable>
  );
};

export default FoodType;

const styles = StyleSheet.create({
  foodTypeContainer: {
    padding: 8,
    margin: 8,
    borderRadius: 8,
    backgroundColor: COLORS.light_grey,
  },
  foodTypeText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  foodTypeContainerSelected: {
    backgroundColor: COLORS.green,
  },
  foodTypeTextSelected: {
    color: COLORS.white,
  },
});
