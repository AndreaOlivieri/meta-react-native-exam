import { StyleSheet, View } from "react-native";
import { GenericTextInput } from "../../atoms/generic-text-input/GenericInput";
import { SubmitButton } from "../../atoms/submit-button/SubmitButton";

export function SignUpSection() {
  return (
    <View style={styles.container}>
      <GenericTextInput label="First Name" />
      <GenericTextInput label="Email" />
      <GenericTextInput label="Password" />
      <SubmitButton label="Sign Up" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 32,
    paddingHorizontal: 16,
    paddingTop: 32,
  },
});
