
const express = require('express');
const cors = require('cors');


const eventRoute = require('./routes/event');


// app

const app = express();



// middleware

app.use(express.json());
app.use(cors());

// route

app.get('/', (req, res) => {
    res.send('Hello');
})

app.use('/event', eventRoute);



// db configuration

const dbConfiguration = require('./connect/connect');

// Listening

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Listening on port ${port}`));

