import { User } from "../models/User"
export class UserAPI {

  createUser = async (user: User): Promise<void> => {
    // add createdUser to MongoDB and return UserResponseModel
  };

  getUserById = async (userId: string): Promise<void> => {
    // interact with mongoDB t ofind user and return userreponse model
  };

  updateUserById = async(userId: string, user: User): Promise<void> => {
    // interact with MongoDB to find user with ID and update with new model
    // return userResponse model
  }

  addUserPointsById = async (userId: string, points: string): Promise<void> => {
    // interact with mongoDb and add however many UserPoints
    // and return UserResponse model
  };

};
