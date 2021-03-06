const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.set('bufferCommands', false);

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());

const uri = process.env.ATLAS_URI;



//DB Connection
getConnection = async () => {
  try {
    await mongoose.connect(uri, { useNewUrlParser: true,  useUnifiedTopology: true });
  } catch (error) {
    console.log(error)
  }
};

getConnection();

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const profileRouter = require('./routes/profile');
const japanRouter = require('./routes/japan');
const experienceRouter = require('./routes/experience');

app.use('/profile', profileRouter);
app.use('/japan', japanRouter);
app.use('/experience', experienceRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});