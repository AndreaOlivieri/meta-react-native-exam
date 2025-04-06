import React from "react";
import { StyleSheet, View } from "react-native";
import { Logo } from "../atoms/Logo";
import { BackButton } from "../atoms/BackButton";
import { UserIcon } from "../atoms/UserIcon";

export function Header() {
  return (
    <View style={styles.header}>
      <View style={[styles.headerElement, styles.headerLeftSide]}>
        <BackButton />
      </View>
      <View style={[styles.headerElement, styles.headerMiddleSide]}>
        <Logo />
      </View>
      <View style={[styles.headerElement, styles.headerRightSide]}>
        <UserIcon />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
  },
  headerElement: {
    alignItems: "center",
    justifyContent: "center",
    height: 80,
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
