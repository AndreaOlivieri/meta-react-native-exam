import AsyncStorage from "@react-native-async-storage/async-storage";

type TUser = {} | null;

class UserProvider {
  public user: TUser = null;

  public constructor() {}

  public async getUser(): Promise<TUser | null> {
    if (!this.user) {
      try {
        const value = await AsyncStorage.getItem("user");
        console.info("[getUser] Data retrieved:");
        if (value !== null) {
          this.user = JSON.parse(value);
        }
      } catch (e) {
        // do nothing
        console.error("[getUser] Error:", e);
      }
    }
    return this.user;
  }
  public async setUser(user: TUser) {
    await AsyncStorage.setItem("user", JSON.stringify(user));
    this.user = user;
  }

  public clearUser() {
    this.setUser(null);
  }
}

export default new UserProvider();
