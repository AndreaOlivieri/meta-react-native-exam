import { COLORS } from "@/src/constants/color-palette";
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

type SubmitButtonProps = {
  label: string;
  onPress?: () => void;
  style?: any;
  enabled: boolean;
};

export function SubmitButton({
  label,
  onPress,
  enabled,
  style,
}: SubmitButtonProps) {
  return (
    <Pressable
      style={[styles.button, !enabled && styles.disabledButton, style]}
      onPress={enabled ? onPress : undefined}
    >
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.yellow,
    padding: 16,
    borderRadius: 16,
  },
  disabledButton: {
    backgroundColor: COLORS.grey,
  },
  text: {
    textAlign: "center",
  },
});
