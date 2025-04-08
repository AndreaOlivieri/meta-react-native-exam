import { useRouter, usePathname } from "expo-router";
import { Image, Pressable, StyleSheet } from "react-native";

export function BackButton() {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <Pressable
      style={[styles.button, { opacity: pathName === "/Profile" ? 1 : 0 }]}
      onPress={() => router.back()}
    >
      <Image
        source={require("@/assets/images/back.png")}
        style={styles.imageButton}
        resizeMode="contain"
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {},
  imageButton: {
    width: 40,
    height: 40,
  },
});
