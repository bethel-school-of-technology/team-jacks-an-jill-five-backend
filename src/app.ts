import express, { NextFunction, Request, Response } from 'express'
import morgan from 'morgan';
import { db } from './models';
import fairRoutes from './routes/fairRoutes'
import userRoutes from './routes/userRoutes';
import commentRoutes from './routes/commentRoutes'
import { Fair } from './models/fair';

const app = express();

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cors = require('cors');
app.use(cors());

// Fair Search Feature
// app.get("/", (req, res) => {
//     const { q } = req.query;
  
//     const keys = ["fairTitle", "fairCity"];
  
//     const search = (data) => {
//       return data.filter((fair) =>
//         keys.some((key) => fair[key].toLowerCase().includes(q))
//       );
//     };
  
//     q ? res.json(search(Fair).slice(0, 10)) : res.json(Fair.slice(0, 10));
//   });


// routes

app.use('/api/fairs', fairRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/users', userRoutes);


app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).end();
});

// Syncing our database
db.sync({ alter: false, force: false }).then(() => {
    console.info("connected to the database!")
});

app.listen(3000);  