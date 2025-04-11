import { StyleSheet, View } from "react-native";
import { GenericInput } from "../../atoms/generic-input/GenericInput";
import { SubmitButton } from "../../atoms/submit-button/SubmitButton";
import { useRef } from "react";
import { useUser } from "../../atoms/user-provider/user.context";
import { useRouter } from "expo-router";
import { PersonalInfoInputs } from "../../molecules/personal-info-inputs/PersonalInfoInputs";

export function SignUpSection() {
  const { user, setUserProperty } = useUser();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <PersonalInfoInputs user={user} setUserProperty={setUserProperty} />
      <SubmitButton
        label="Sign Up"
        enabled={
          !!user?.firstName &&
          !!user?.lastName &&
          !!user?.email &&
          !!user?.phoneNumber
        }
        onPress={() => {
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
