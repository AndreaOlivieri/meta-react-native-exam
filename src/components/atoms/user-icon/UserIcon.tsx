import { Image, StyleSheet } from "react-native";

type UserIconProps = {
  url?: string;
};
export function UserIcon({ url }: UserIconProps) {
  return (
    <Image
      source={
        url
          ? { uri: url }
          : require("@/assets/images/blank-profile-picture.webp")
      }
      style={[styles.userIcon]}
      resizeMode="center"
    />
  );
}

const styles = StyleSheet.create({
  userIcon: { width: 70, height: 70, borderRadius: "50%" },
});
