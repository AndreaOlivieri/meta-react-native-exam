import React from "react";
import { StyleSheet, View } from "react-native";
import { Logo } from "../../atoms/logo/Logo";
import { BackButton } from "../../atoms/back-button/BackButton";
import { UserIcon } from "../../atoms/user-icon/UserIcon";

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
    flexDirection: "row",
    flexWrap: "nowrap",
    borderWidth: 1,
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
