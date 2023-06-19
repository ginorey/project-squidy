import Router  from 'koa-router';
import { Context } from 'koa';
import { UserService } from '../services/userService';
import { User, validateUser } from '../models/User';


export function userRoutes(router: Router, userService: UserService){

  router.post('/users', validateUser, async (ctx: Context): Promise<void> =>{
    const user: User = ctx.request.body as User;
    ctx.body = await userService.createUser(user);
  });

  router.get('/users/:userId', async (ctx: Context): Promise<void> =>{
    const userId = ctx.params.userId;
    ctx.body = await userService.getUser(userId);
  });

  router.put('/users/:userId', async (ctx: Context): Promise<void> =>{
    const user: User = ctx.request.body as User;
    ctx.body = await userService.updateUserById(user);
  })

  router.post('/users/:userId/points', async (ctx: Context): Promise<void> =>{
    const userId = ctx.params.userId;
    const points = ctx.params.points;
    ctx.body = await userService.addUserPointsById(userId, points);
  });

  return router.routes();
};
