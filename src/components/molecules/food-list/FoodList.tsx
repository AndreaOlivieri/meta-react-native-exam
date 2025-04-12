import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FoodListProps } from "./FoodList.types";

const FoodList = ({ foodMenu }: FoodListProps) => {
  return (
    <View style={styles.contentContainer}>
      {foodMenu.map((food) => (
        <View key={food.name} style={styles.foodContainer}>
          <View style={styles.foodLeftInnerContainer}>
            <Text style={styles.foodText}>{food.name}</Text>
            <Text style={styles.foodText}>{food.description}</Text>
            <Text style={styles.foodText}>{food.cost}</Text>
          </View>
          <View style={styles.foodRightInnerContainer}>
            <Image
              source={food.image}
              resizeMode="contain"
              style={styles.foodImage}
            />
          </View>
        </View>
      ))}
    </View>
  );
};

export default FoodList;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    marginHorizontal: 16,
  },
  contentContainer: { paddingHorizontal: 8 },
  foodLeftInnerContainer: {
    flexGrow: 1,
    flexShrink: 1,
  },
  foodRightInnerContainer: {
    flexGrow: 1,
  },
  foodContainer: {
    flexDirection: "row",
    padding: 8,
    margin: 8,
    borderRadius: 8,
    gap: 8,
  },
  foodText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  foodImage: { width: 120, height: 80 },
});
