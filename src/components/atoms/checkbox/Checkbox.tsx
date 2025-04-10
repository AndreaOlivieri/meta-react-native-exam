import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

type CheckboxProps = {
  label: string;
  onChange: (checked: boolean) => void;
};
export function Checkbox({ onChange, label }: CheckboxProps) {
  const [checked, setChecked] = useState(false);

  const onPressHandler = () => {
    onChange(!checked);
    setChecked(!checked);
  };

  return (
    <Pressable onPress={onPressHandler} style={styles.container}>
      <View style={[styles.checkbox, checked && styles.checked]}>
        {checked && <Text style={styles.checkmark}>✓</Text>}
      </View>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: "#888",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  checked: {
    backgroundColor: "#007aff",
    borderColor: "#007aff",
  },
  checkmark: {
    color: "white",
    fontSize: 16,
  },
  label: {
    fontSize: 16,
  },
});
