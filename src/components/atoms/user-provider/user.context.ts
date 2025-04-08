import { TUser } from "@/src/components/atoms/user-provider/user.service";
import { createContext, useContext } from "react";

type TUserContext = {
  user: TUser;
  setUser: (user: TUser) => void;
  clearUser: () => void;
};

const UserContext = createContext<TUserContext>({
  user: null,
  setUser: () => {},
  clearUser: () => {},
});

const useUser = () => {
  return useContext(UserContext);
};

export { useUser, UserContext };
