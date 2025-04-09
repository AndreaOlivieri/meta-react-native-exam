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
        setUserProperty: (propertyName: string) => (value: string) => {
          const newUser = {
            ...(user ?? {}),
            [propertyName]: value ?? "",
          } as TUser;

          return userService.setUser(newUser).then(() => {
            setUser(newUser);
          });
        },
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
