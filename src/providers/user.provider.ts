import AsyncStorage from "@react-native-async-storage/async-storage";

type TUser = {} | null;

class UserProvider {
  public user: TUser = null;

  public constructor() {}

  public async getUser(): Promise<TUser | null> {
    try {
      const value = await AsyncStorage.getItem("user");
      if (value !== null) {
        console.info("[getUser] Data retrieved:", value);
      }
      return value;
    } catch (e) {
      // do nothing
      console.error("[getUser] Error:", e);
      return null;
    }
  }
  public setUser(user: TUser) {
    this.user = user;
  }
}

export default new UserProvider();
