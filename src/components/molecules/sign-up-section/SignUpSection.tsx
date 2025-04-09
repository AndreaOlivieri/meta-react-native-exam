import { StyleSheet, View } from "react-native";
import { GenericInput } from "../../atoms/generic-input/GenericInput";
import { SubmitButton } from "../../atoms/submit-button/SubmitButton";
import { useRef } from "react";
import { useUser } from "../../atoms/user-provider/user.context";
import { useRouter } from "expo-router";

export function SignUpSection() {
  const firstNameRef = useRef("");
  const EmailRef = useRef("");
  const PhoneNumberRef = useRef("");
  const { setUser } = useUser();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <GenericInput
        label="First Name*"
        onChangeText={(text) => (firstNameRef.current = text)}
        autoComplete="name"
        inputMode="text"
        placeholder="Mario"
      />
      <GenericInput
        label="Email*"
        onChangeText={(text) => (EmailRef.current = text)}
        autoComplete="email"
        inputMode="email"
        autoCapitalize="none"
        placeholder="mario.rossi@gmail.com"
      />
      <GenericInput
        label="Phone Number*"
        onChangeText={(text) => (PhoneNumberRef.current = text)}
        autoComplete="tel"
        inputMode="tel"
        placeholder="+1 (123) 456-7890"
      />
      <SubmitButton
        label="Sign Up"
        onPress={() => {
          setUser({
            firstName: firstNameRef.current,
            email: EmailRef.current,
            phoneNumber: PhoneNumberRef.current,
          });
          router.replace("/Home");
        }}
      />
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
