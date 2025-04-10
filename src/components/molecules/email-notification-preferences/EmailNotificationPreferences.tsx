import { StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import { Checkbox } from "../../atoms/checkbox/Checkbox";

type EmailNotificationPreferencesProps = {
  preferences: any;
  onChange: (value: any) => void;
};
export function EmailNotificationPreferences({
  preferences,
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
        checked={preferences.orderStatuses}
        onChange={onChangeHandler("orderStatuses")}
      />
      <Checkbox
        label="Password changes"
        checked={preferences.passwordChanges}
        onChange={onChangeHandler("passwordChanges")}
      />
      <Checkbox
        label="Special offers"
        checked={preferences.specialOffers}
        onChange={onChangeHandler("specialOffers")}
      />
      <Checkbox
        label="Newsletters"
        checked={preferences.newsletter}
        onChange={onChangeHandler("newsletter")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    marginBottom: 6,
  },
});
