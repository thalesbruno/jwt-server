import 'reflect-metadata';
import { createConnection } from 'typeorm';
import * as express from 'express';
import * as helmet from 'helmet';
import * as cors from 'cors';
import routes from './routes';

//Connects to the Database -> then starts the express
createConnection()
  .then(async (connection) => {
    // Create a new express application instance
    const app = express();

    // Call middlewares
    app.use(cors());
    app.use(helmet());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    //Set all routes from routes folder
    app.use('/', routes);

    app.listen(5000, () => {
      console.log('Server started on port 3000!');
    });
  })
  .catch((error) => console.log(error));
