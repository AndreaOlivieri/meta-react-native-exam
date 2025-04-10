import { Image, StyleSheet, Text, View } from "react-native";
import { SubmitButton } from "../../atoms/submit-button/SubmitButton";

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
  console.log("avatarUrl", avatarUrl);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Avatar</Text>
      <View style={styles.avatarContainer}>
        <Image
          source={
            avatarUrl
              ? { uri: avatarUrl }
              : require("@/assets/images/blank-profile-picture.webp")
          }
          style={[styles.userIcon]}
          resizeMode="center"
        />
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
  userIcon: { width: 80, height: 80, borderRadius: "50%" },
  avatarContainer: {
    flexDirection: "row",
    gap: 22,
    alignItems: "center",
  },
});
