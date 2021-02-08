// import express from 'express'
// import cors from 'cors'
// import router from './routes'

// var app = express()

// app.use(cors());
// app.use("/api", router);

// const port = process.env.PORT || 3000

// app.listen(port, err => {
//     if (err) {
//       return console.error(err);
//     }
//     return console.log(`server is listening on ${port}`);
// });
import express from 'express';

const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('The sedulous hyena ate the antelope!');
});
app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});

export default app;