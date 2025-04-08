import { UserContext } from "./user.context";
import userService, { TUser } from "./user.service";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<TUser>(null);
  const router = useRouter();

  useEffect(() => {
    // todo - need to remove clearUser
    userService.clearUser().then(() => {
      userService.getUser().then((user) => {
        setUser(user);
        if (user) {
          router.replace("/Home");
        } else {
          router.replace("/Onboarding");
        }
      });
    });
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser: (newUser) => {
          userService.setUser(newUser).then(() => {
            setUser(newUser);
          });
        },
        clearUser: () => {
          userService.clearUser().then(() => {
            setUser(null);
          });
        },
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
