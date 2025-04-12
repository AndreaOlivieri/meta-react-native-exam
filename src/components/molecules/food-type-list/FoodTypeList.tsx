import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FOOD_TYPES } from "@/src/constants/food";
import FoodType from "../../atoms/food-type/FoodType";

type FoodTypeListProps = {
  selectedTypes: string[];
  setSelectedTypes: React.Dispatch<React.SetStateAction<string[]>>;
};

const FoodTypeList = ({
  selectedTypes,
  setSelectedTypes,
}: FoodTypeListProps) => {
  return (
    <>
      <Text style={styles.title}>ORDER FOR DELIVERY!</Text>
      <ScrollView horizontal contentContainerStyle={styles.contentContainer}>
        {Object.values(FOOD_TYPES).map((type) => {
          return (
            <FoodType
              key={type.name}
              type={type}
              isSelected={selectedTypes.includes(type.name)}
              onPress={() => {
                setSelectedTypes((currentSelectedTypes) => {
                  if (currentSelectedTypes.includes(type.name)) {
                    return currentSelectedTypes.filter(
                      (selectedType) => selectedType !== type.name
                    );
                  } else {
                    return [...selectedTypes, type.name];
                  }
                });
              }}
            />
          );
        })}
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
});
