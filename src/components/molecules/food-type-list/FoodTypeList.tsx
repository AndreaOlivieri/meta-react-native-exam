import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FOOD_TYPES } from "@/src/constants/food";

const FoodTypeList = () => {
  return (
    <>
      <Text style={styles.title}>ORDER FOR DELIVERY!</Text>
      <ScrollView horizontal contentContainerStyle={styles.contentContainer}>
        {Object.values(FOOD_TYPES).map((type) => (
          <View key={type.name} style={styles.foodTypeContainer}>
            <Text style={styles.foodTypeText}>{type.name}</Text>
          </View>
        ))}
      </ScrollView>
    </>
  );
};

export default FoodTypeList;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    marginHorizontal: 16,
  },
  contentContainer: { padding: 8 },
  foodTypeContainer: {
    padding: 8,
    margin: 8,
    borderRadius: 8,
    backgroundColor: "#f2f2f2",
  },
  foodTypeText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
