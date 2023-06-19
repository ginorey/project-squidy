import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser'
import { MongoClient, ServerApiVersion } from "mongodb";
import { userRoutes } from './routes/userRoutes';
import { UserService } from './services/userService';

const { MONGODB_URI } = process.env

async function startServer() {
  try {
    // Connect to MongoDB
    const uri = MONGODB_URI as string;
    const client = new MongoClient(uri, { serverApi: ServerApiVersion.v1 });
    await client.connect();

    // Create our Koa app and Router
    const app = new Koa();
    const router = new Router();

    // initiate dependencies
    const userService = new UserService();
    
    // pass routes 
    app.use(bodyParser());
    app.use(userRoutes(router, userService));

    app.listen(3000, () => {
      console.log('Server started on http://localhost:3000');
    });
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
}

startServer().catch((error) => {
  console.error("Error starting the server:", error);
});

