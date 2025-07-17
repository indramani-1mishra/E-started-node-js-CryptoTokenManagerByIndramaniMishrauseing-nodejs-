const express = require('express')
const { PORT } = require('./config/serverconfig');
const connectDv = require('./config/dataBaseconfig');

const app= express();

app.get("/",(req,res)=>
{
    res.send('<h1>Server is running</h1>') // for testing purpose
})

const startServer = async () => {
  try {
    await connectDv();
    app.listen(PORT, () => {
      console.log(` Server is running at: http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error(" Failed to start server:", err);
  }
};

startServer();