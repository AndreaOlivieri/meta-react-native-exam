import { Header } from "@/src/components/molecules/header/Header";
import { HeroSection } from "@/src/components/molecules/hero-section/HeroSection";
import { SignUpSection } from "@/src/components/molecules/sign-up-section/SignUpSection";
import { Text, View } from "react-native";

export default function Onboarding() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <HeroSection />
      <SignUpSection />
    </View>
  );
}
