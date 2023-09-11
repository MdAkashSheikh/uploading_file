require('dotenv').config();
const express  = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
})

let upload = multer({ storage: storage });


mongoose.connect(process.env.DB_CONN)
.then(() => console.log("DataBase Connected."))
.catch((err) => console.log(err));

app.get('/', (req, res) => {
    res.send({
        "message": "Hello World"
    })
})

app.post('/image',  async(req, res) => {
    console.log(req.files);
})

app.listen(5001, () => {
    console.log("Listening on port: 5001");
})