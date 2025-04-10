import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { PersonalInfoInputs } from "../../molecules/personal-info-inputs/PersonalInfoInputs";
import { useUser } from "../../atoms/user-provider/user.context";
import { TUser } from "../../atoms/user-provider/user.service";
import { AvatarInput } from "../../molecules/avatar-input/AvatarInput";
import { EmailNotificationPreferences } from "../../molecules/email-notification-preferences/EmailNotificationPreferences";

export function PersonalInformationForm() {
  const { user } = useUser();
  const [newUser, setNewUser] = useState<TUser>(user);

  const setNewUserProperty = (fieldName: string) => (value: any) => {
    const _newUser = {
      ...newUser,
      [fieldName]: value,
    } as TUser;
    setNewUser(_newUser);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personal Information</Text>
      <AvatarInput
        avatarUrl={newUser?.avatarUrl}
        onChange={() =>
          setNewUserProperty("avatarUrl")(
            "https://media.istockphoto.com/id/1437816897/it/foto/ritratto-di-donna-daffari-manager-o-risorse-umane-per-il-successo-professionale-azienda-che.jpg?s=1024x1024&w=is&k=20&c=mLAbHXnskg0-EG1ioBJjHlTtiU7M3gwKxu9F2jwnjSQ="
          )
        }
        onRemove={() => setNewUserProperty("avatarUrl")("")}
      />
      <PersonalInfoInputs user={newUser} setUserProperty={setNewUserProperty} />
      <EmailNotificationPreferences
        onChange={setNewUserProperty("notificationPreferences")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingTop: 16,
    gap: 16,
  },
  title: {
    fontSize: 22,
  },
});
