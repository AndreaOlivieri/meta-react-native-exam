import SearchBar from "@/src/components/atoms/search-bar/SearchBar";
import FoodTypeList from "@/src/components/molecules/food-type-list/FoodTypeList";
import { HeroSection } from "@/src/components/molecules/hero-section/HeroSection";
import { View } from "react-native";



export default function Home() {
  return (
    <View>
      <HeroSection>
        <SearchBar />
      </HeroSection>
      <FoodTypeList />
    </View>
  );
}
