import React, { useState } from "react";
import { View } from "react-native";
import { PersonalInfoInputs } from "../../molecules/personal-info-inputs/PersonalInfoInputs";
import { useUser } from "../../atoms/user-provider/user.context";
import { TUser } from "../../atoms/user-provider/user.service";

export function PersonalInformationForm() {
  const { user } = useUser();
  const [newUser, setNewUser] = useState<TUser>(user);

  const setNewUserProperty = (fieldName: string) => (value: string) => {
    setNewUser({
      ...newUser,
      [fieldName]: value,
    } as TUser);
  };

  return (
    <View>
      <PersonalInfoInputs user={newUser} setUserProperty={setNewUserProperty} />
    </View>
  );
}
