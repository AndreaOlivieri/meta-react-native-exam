import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

type GenericTextInputProps = {
  label: string;
} & TextInputProps;
export function GenericInput({
  label,
  ...textInput
}: GenericTextInputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.inputText} {...textInput} />
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
