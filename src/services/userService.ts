import { UserAPI } from "../api/userAPI";
import { User } from "../models/User";

export class UserService {
  private userAPI: UserAPI;

  constructor() {
    this.userAPI = new UserAPI();
  }

  async getUser(userId: string): Promise<void> {
    // add logic to handle userId validation
    await this.userAPI.getUser(userId);
  }

  async addUserPoints(userId: string, points: string): Promise<void> {
    // Add logic to handle userId validation and 
    await this.userAPI.addUserPoints(userId, points);
  }

  async createUser(user: User): Promise<void> {
    // add logic to handle user validation
  }
}
