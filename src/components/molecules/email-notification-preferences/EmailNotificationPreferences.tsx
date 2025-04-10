import { StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import { Checkbox } from "../../atoms/checkbox/Checkbox";

type EmailNotificationPreferencesProps = {
  onChange: (value: any) => void;
};
export function EmailNotificationPreferences({
  onChange,
}: EmailNotificationPreferencesProps) {
  const emailPreferencesRef = useRef({});

  const onChangeHandler = (fieldName: string) => (checked: boolean) => {
    emailPreferencesRef.current = {
      ...emailPreferencesRef.current,
      [fieldName]: checked,
    };
    onChange(emailPreferencesRef.current);
  };
  return (
    <View>
      <Text style={styles.title}>Email Notifications</Text>
      <Checkbox
        label="Order statuses"
        onChange={onChangeHandler("orderStatuses")}
      />
      <Checkbox
        label="Password changes"
        onChange={onChangeHandler("passwordChanges")}
      />
      <Checkbox
        label="Special offers"
        onChange={onChangeHandler("specialOffers")}
      />
      <Checkbox label="Newsletters" onChange={onChangeHandler("newsletter")} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    marginBottom: 8,
  }
});
