import Router  from 'koa-router';
import { UserService } from '../services/userService';
import { User } from '../models/User';


export function userRoutes(router: Router, userService: UserService) {
  router.get('/users/:userId', async (ctx) => {
    const userId = ctx.params.userId;
    ctx.body = await userService.getUser(userId);
  });

  router.post('/users', async (ctx) => {
    const user = ctx.request.body;
    const createdUser = await userService.createUser(user);

    ctx.body = createdUser;
  });

  router.post('/users/:userId/points', async (ctx) => {
    const userId = ctx.params.userId;
    const points = ctx.params.points;
    ctx.body = await userService.addUserPoints(userId, points);
  });
  return router.routes();
}
