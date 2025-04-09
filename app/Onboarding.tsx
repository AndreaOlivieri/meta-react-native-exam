import { HeroSection } from "@/src/components/molecules/hero-section/HeroSection";
import { SignUpSection } from "@/src/components/organisms/sign-up-section/SignUpSection";
import { View } from "react-native";

export default function Onboarding() {
  return (
    <View>
      <HeroSection />
      <SignUpSection />
    </View>
  );
}
