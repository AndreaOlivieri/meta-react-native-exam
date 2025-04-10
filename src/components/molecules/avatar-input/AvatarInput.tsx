import { StyleSheet, Text, View } from "react-native";
import { SubmitButton } from "../../atoms/submit-button/SubmitButton";
import { UserIcon } from "../../atoms/user-icon/UserIcon";

type AvatarInputProps = {
  avatarUrl?: string;
  onChange: () => void;
  onRemove: () => void;
};
export function AvatarInput({
  avatarUrl,
  onChange,
  onRemove,
}: AvatarInputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Avatar</Text>
      <View style={styles.avatarContainer}>
        <UserIcon url={avatarUrl} />
        <SubmitButton label="Change" onPress={onChange} />
        <SubmitButton label="Remove" onPress={onRemove} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 8,
  },
  title: {
    fontSize: 16,
  },
  avatarContainer: {
    flexDirection: "row",
    gap: 22,
    alignItems: "center",
  },
});
