import React from "react";
import { GenericInput } from "../../atoms/generic-input/GenericInput";
import { TUser } from "../../atoms/user-provider/user.service";

type PersonalInfoInputsProps = {
  user: TUser;
  setUserProperty: (propertyName: string) => (value: string) => void;
};
export function PersonalInfoInputs({
  user,
  setUserProperty,
}: PersonalInfoInputsProps) {
  return (
    <>
      <GenericInput
        label="First Name"
        onChangeText={setUserProperty("firstName")}
        autoComplete="name"
        inputMode="text"
        placeholder="Mario"
        value={user?.firstName}
      />
      <GenericInput
        label="Last Name"
        onChangeText={setUserProperty("lastName")}
        autoComplete="name"
        inputMode="text"
        placeholder="Rossi"
        value={user?.lastName}
      />
      <GenericInput
        label="Email"
        onChangeText={setUserProperty("email")}
        autoComplete="email"
        inputMode="email"
        autoCapitalize="none"
        placeholder="mario.rossi@gmail.com"
        value={user?.email}
      />
      <GenericInput
        label="Phone Number"
        onChangeText={setUserProperty("phoneNumber")}
        autoComplete="tel"
        inputMode="tel"
        placeholder="+1 (123) 456-7890"
        value={user?.phoneNumber}
      />
    </>
  );
}
