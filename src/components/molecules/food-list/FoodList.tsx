import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FoodListProps } from "./FoodList.types";
import { COLORS } from "@/src/constants/color-palette";

const FoodList = ({ foodMenu }: FoodListProps) => {
  return (
    <View style={styles.contentContainer}>
      {foodMenu.map((food, index, array) => {
        const isLastElement = array.length - 1 === index;
        return (
          <View
            key={food.name}
            style={[
              styles.foodContainer,
              isLastElement && styles.lastFoodContainer,
            ]}
          >
            <View style={styles.foodLeftInnerContainer}>
              <View style={styles.foodNameDescriptionContainer}>
                <Text style={styles.foodName}>{food.name}</Text>
                <Text style={styles.foodDescription} numberOfLines={4} ellipsizeMode="tail">
                  {food.description}
                </Text>
              </View>
              <Text style={styles.foodCost}>${food.cost}</Text>
            </View>
            <View style={styles.foodRightInnerContainer}>
              <Image
                source={food.image}
                resizeMode="contain"
                style={styles.foodImage}
              />
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default FoodList;

const styles = StyleSheet.create({
  contentContainer: { paddingHorizontal: 8 },
  foodLeftInnerContainer: {
    flexGrow: 1,
    flexShrink: 1,
    justifyContent: "space-between",
    gap: 8,
  },
  foodRightInnerContainer: {
    alignSelf: "flex-end",
    width: 120,
  },
  foodContainer: {
    borderColor: COLORS.grey,
    borderTopWidth: 1,
    flexDirection: "row",
    paddingVertical: 16,
    marginHorizontal: 8,
    gap: 8,
    height: 150,
  },
  lastFoodContainer: {
    borderBottomWidth: 1,
    borderColor: COLORS.grey,
  },
  foodNameDescriptionContainer: {
    flexShrink: 2,
    height: 80,
    gap: 4,
  },
  foodName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  foodDescription: {
    fontSize: 14,
  },
  foodCost: {
    fontSize: 14,
    fontWeight: "bold",
  },
  foodImage: { width: 120, height: 80 },
});
