import { StyleSheet, Text, TextInput, View } from "react-native";

type GenericTextInputProps = {
  label: string;
  onChangeText: (text: string) => void;
};
export function GenericTextInput({
  label,
  onChangeText,
}: GenericTextInputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.inputText} onChangeText={onChangeText} />
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
