import { usePathname, useRouter } from "expo-router";
import { Image, Pressable, StyleSheet } from "react-native";
import { useUser } from "../user-provider/user.context";

export function UserIcon() {
  const router = useRouter();
  const pathName = usePathname();
  const { user } = useUser();

  return (
    <Pressable
      onPress={() => {
        router.navigate("/Profile");
      }}
    >
      <Image
        source={
          user?.avatarUrl
            ? { uri: user.avatarUrl }
            : require("@/assets/images/user-icon.png")
        }
        style={[styles.userIcon, { opacity: pathName !== "/Onboarding" ? 1 : 0 }]}
        resizeMode="contain"
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  userIcon: { width: 80, height: 80, borderRadius: "50%" },
});
