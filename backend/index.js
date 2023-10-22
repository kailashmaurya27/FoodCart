const express = require('express')
const app = express()
const port = 5000 

// MiddleWare
app.use(express.json());
app.use('/api', require("./Routes/CreateUser"));

const connectToMongoDB = require("./db")
connectToMongoDB();

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});