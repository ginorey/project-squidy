import { UserAPI } from "../api/userAPI";
import { User } from "../models/User";

export class UserService {
  private userAPI: UserAPI;

  constructor() {
    this.userAPI = new UserAPI();
  };

  createUser = async (user: User): Promise<void> => {
    await this.userAPI.createUser(user);
  };

  getUserById = async (userId: string): Promise<void> =>{
    // add logic to handle userId validation
    await this.userAPI.getUserById(userId);
  };

  updateUserById = async(user: User): Promise<void> =>{
    // add logic to handle updating UserId 
  }
  
  addUserPointsById = async (userId: string, points: string): Promise<void> =>{
    await this.userAPI.addUserPointsById(userId, points);
  };
};
