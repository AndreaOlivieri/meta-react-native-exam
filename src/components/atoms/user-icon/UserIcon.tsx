import userProvider from "@/src/providers/user.provider";
import { useEffect, useState } from "react";
import { Image, StyleSheet } from "react-native";

export function UserIcon() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    userProvider.getUser().then((user) => {
      setIsVisible(!!user);
    });
  }, []);

  return (
    <Image
      source={require("@/assets/images/user-icon.png")}
      style={[styles.userIcon, { opacity: isVisible ? 1 : 0 }]}
      resizeMode="contain"
    />
  );
}

const styles = StyleSheet.create({
  userIcon: { width: 80, height: 80, borderRadius: "50%" },
});
