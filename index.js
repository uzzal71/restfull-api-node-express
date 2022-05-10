import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

// body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// public or static file
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.status(200).json({ message: `Node & Express server is running on ${PORT}` });
});

app.listen(PORT, () => {
    console.log(`Your server is running on ${PORT}`);
});