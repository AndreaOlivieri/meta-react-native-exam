import { COLORS } from "@/src/constants/color-palette";
import { FONT_TEXT } from "@/src/constants/font-text";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export function HeroSection({ children }: { children?: React.ReactNode }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Little Lemon</Text>
      <View style={styles.bodyContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.subtitle}>Chicago</Text>
          <Text style={styles.description}>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </Text>
        </View>
        <Image
          style={styles.image}
          source={require("@/assets/images/restaurant/bread-with-food.jpg")}
        ></Image>
      </View>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: COLORS.green,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
  },
  title: {
    ...FONT_TEXT.title,
    fontWeight: "bold",
    color: COLORS.yellow,
  },
  subtitle: {
    ...FONT_TEXT.subtitle,
    color: COLORS.white,
    marginBottom: 16,
  },
  description: {
    ...FONT_TEXT.description,
    fontSize: 18,
    color: COLORS.white,
  },
  bodyContainer: {
    flexDirection: "row",
    gap: 8,
  },
  textContainer: {
    flexShrink: 2,
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: "flex-end",
    borderRadius: 16,
  },
});
