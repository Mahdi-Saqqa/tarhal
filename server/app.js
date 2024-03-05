require("dotenv").config();
const express = require("express");



const port = process.env.PORT || 8000;
const app = express();
app.use(express.json());
