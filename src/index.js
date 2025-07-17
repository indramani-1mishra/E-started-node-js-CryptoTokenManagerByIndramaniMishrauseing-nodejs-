const readlineSync = require('readline-sync');
const express = require('express');
const { PORT } = require('./config/serverconfig');
const connectDv = require('./config/dataBaseconfig');
const startConsole = require('./console/tokenconsole');
const apiRouter = require('./routes/apiroute');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api',apiRouter);
app.get("/", (req, res) => {
  res.send('<h1>Server is running</h1>');
});

const startServer = async () => {
  const mode = readlineSync.question('Choose mode: 1 for Console, 2 for Server: \n');

  try {
    await connectDv();

    if (mode === '1') {
      await startConsole();
    } else if (mode === '2') {
      app.listen(PORT, () => {
        console.log(` Server is running at: http://localhost:${PORT}`);
      });
    } else {
      console.log(' Invalid Mode. Exiting...');
      process.exit();
    }
  } catch (err) {
    console.error(" Failed to start:", err);
  }
};

startServer();
