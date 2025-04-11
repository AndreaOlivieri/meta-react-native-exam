import { COLORS } from "@/src/constants/color-palette";
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

type SubmitButtonProps = {
  label: string;
  onPress?: () => void;
  style?: any;
  disabled?: boolean;
};

export function SubmitButton({
  label,
  onPress,
  disabled = false,
  style,
}: SubmitButtonProps) {
  return (
    <Pressable
      style={[styles.button, disabled && styles.disabledButton, style]}
      onPress={!disabled ? onPress : undefined}
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
