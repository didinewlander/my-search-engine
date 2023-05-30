const express = require("express");
const cors = require('cors');

require("dotenv").config();

const app = express(); // initialize the app
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(4000, () => console.log("Listening on port 4000"));