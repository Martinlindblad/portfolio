const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
var corsOptions = {
  origin: ['http://localhost:3000', 'https://martinlindblad.com'],
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'] };
app.use(cors(corsOptions));

app.use(express.json());


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }
);
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