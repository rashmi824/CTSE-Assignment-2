const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();

const stripe = require('./routes/checkoutRoute');
const connection = require('./dbconnection/dbconnection');



dotenv.config();

app.use(express.json());
app.use(cors());

app.use(express.static('public'));

const PORT = process.env.PORT || 5002;

app.use("/api/stripe",stripe)

connection.once('open',()=>{
    console.log('Checkout Service DB connected successfully!!');
});




app.listen(PORT,()=>{
    console.log(`Server is up and running on PORT : ${PORT}`);
});