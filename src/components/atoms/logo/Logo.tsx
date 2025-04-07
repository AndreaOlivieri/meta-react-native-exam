import { Image } from "react-native";

export function Logo() {
  return (
    <Image
      source={require("@/assets/images/logo.jpg")}
      style={{ width: 120, height: 80 }}
      resizeMode="contain"
    />
  );
}
