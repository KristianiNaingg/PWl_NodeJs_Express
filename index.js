const express = require('express');

const app = express();

const myRoutes= require ('./routes/route1.js')

const port = 3000;

app.use(express.urlencoded({
  extended:false
}))

app.use(myRoutes)

// app.get('/', (req, res) => {
//   res.send('Hello manusia!');
// });[]]]]]]]]]]

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});