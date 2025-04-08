import { useRouter } from "expo-router";
import { Image, Pressable, StyleSheet } from "react-native";
import { useUser } from "../user-provider/user.context";

export function UserIcon() {
  const router = useRouter();
  const { user } = useUser();

  return (
    <Pressable
      onPress={() => {
        router.navigate("/Profile");
      }}
    >
      <Image
        source={require("@/assets/images/user-icon.png")}
        style={[styles.userIcon, { opacity: !!user ? 1 : 0 }]}
        resizeMode="contain"
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  userIcon: { width: 80, height: 80, borderRadius: "50%" },
});
