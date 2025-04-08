import AsyncStorage from "@react-native-async-storage/async-storage";

export type TUser = {
  firstName: string;
  lastName?: string;
  email: string;
  phoneNumber: string;
  avatarUrl?: string;
  notificationPreferences?: {
    orderStatuses: boolean;
    passwordChanges: boolean;
    specialOffers: boolean;
    newsletter: boolean;
  };
} | null;

class UserService {
  public user: TUser = null;

  public constructor() {}

  public async getUser(): Promise<TUser> {
    if (!this.user) {
      try {
        const value = await AsyncStorage.getItem("user");
        console.info("[getUser] Data retrieved:", value);
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
    return this.user;
  }

  public async clearUser() {
    await AsyncStorage.removeItem("user");
    this.user = null;
    return this.user;
  }
}

export default new UserService();
