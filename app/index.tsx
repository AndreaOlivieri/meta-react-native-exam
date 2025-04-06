import userProvider from "@/src/providers/user.provider";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    userProvider.getUser().then((user) => {
      if (user) {
        router.replace("/Home");
      } else {
        router.replace("/Onboarding");
      }
    });
  }, []);

  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}
