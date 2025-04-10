import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Logo } from "../../atoms/logo/Logo";
import { BackButton } from "../../atoms/back-button/BackButton";
import { UserIcon } from "../../atoms/user-icon/UserIcon";
import { usePathname, useRouter } from "expo-router";
import { useUser } from "../../atoms/user-provider/user.context";

export function Header() {
  const router = useRouter();
  const pathName = usePathname();
  const { user } = useUser();
  return (
    <View style={styles.header}>
      <View style={[styles.headerElement, styles.headerLeftSide]}>
        <BackButton />
      </View>
      <View style={[styles.headerElement, styles.headerMiddleSide]}>
        <Logo />
      </View>
      <View style={[styles.headerElement, styles.headerRightSide]}>
        <Pressable
          onPress={() => {
            router.navigate("/Profile");
          }}
          style={{ opacity: pathName !== "/Onboarding" ? 1 : 0 }}
        >
          <UserIcon url={user?.avatarUrl} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    flexWrap: "nowrap",
  },
  headerElement: {
    alignItems: "center",
    justifyContent: "center",
  },
  headerLeftSide: {
    flexGrow: 1,
    flexShrink: 1,
  },
  headerMiddleSide: {
    flexGrow: 1,
    flexShrink: 1,
  },
  headerRightSide: {
    flexGrow: 1,
    flexShrink: 1,
  },
});
