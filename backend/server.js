const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const whitelist = ['https://www.martinlindblad.com', 'http://localhost/3000']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true,
}

app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true,  useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const profileRouter = require('./routes/profile');
const japanRouter = require('./routes/japan');
const experienceRouter = require('./routes/experience');

app.use('/profile', cors(corsOptions), profileRouter);
app.use('/japan', cors(corsOptions), japanRouter);
app.use('/experience', cors(corsOptions), experienceRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});