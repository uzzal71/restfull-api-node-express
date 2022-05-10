import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import { routes } from "./src/routes";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

// body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// public or static file
app.use(express.static('public'));

// Add all the routes to our Express server
// exported from routes/index.js
routes.forEach(route => {
    app[route.method](route.path, route.handler);
});

app.listen(PORT, () => {
    console.log(`Your server is running on ${PORT}`);
});