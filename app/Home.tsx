import SearchBar from "@/src/components/atoms/search-bar/SearchBar";
import FoodList from "@/src/components/molecules/food-list/FoodList";
import { FoodListItem } from "@/src/components/molecules/food-list/FoodList.types";
import FoodTypeList from "@/src/components/molecules/food-type-list/FoodTypeList";
import { HeroSection } from "@/src/components/molecules/hero-section/HeroSection";
import { FOOD_MENU, FOOD_TYPES } from "@/src/constants/food";
import { useMemo, useState } from "react";
import { View } from "react-native";

export default function Home() {
  const [query, setQuery] = useState<string>("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const foodMenu = useMemo<FoodListItem[]>(() => {
    return Object.values(FOOD_MENU).filter((food) => {
      const foodName = food.name.toLowerCase();
      return (
        (!foodName || foodName.includes(query.toLowerCase())) &&
        (selectedTypes.length === 0 ||
          food.types.some((typeCode: string) => {
            const typeName = FOOD_TYPES[typeCode]?.name;
            return typeName && selectedTypes.includes(typeName);
          }))
      );
    });
  }, [query, selectedTypes]);

  return (
    <View>
      <HeroSection>
        <SearchBar query={query} setQuery={setQuery} />
      </HeroSection>
      <FoodTypeList
        selectedTypes={selectedTypes}
        setSelectedTypes={setSelectedTypes}
      />
      <FoodList foodMenu={foodMenu} />
    </View>
  );
}
