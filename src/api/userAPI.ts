
export class UserAPI {

  public async getUser(userId: string): Promise<void> {
    // interact with mongoDB find user and return UserResponse Model
  }

  public async addUserPoints(userId: string, points: string): Promise<void> {
    // interact with mongoDb and add however many UserPoints
    // and return UserResponse model
  }
}
