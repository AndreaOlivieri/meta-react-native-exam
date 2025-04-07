import { StyleSheet, Text, TextInput, View } from "react-native";

type GenericTextInputProps = {
  label: string;
};
export function GenericTextInput({ label }: GenericTextInputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.inputText} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  label: {},
  inputText: {
    marginTop: 8,
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
  },
});
