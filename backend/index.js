const express = require("express");
const cors = require('cors');
const app = express();
const rootRouter = require('./routes/index');
require('dotenv').config
const bodyParser = require('body-parser')

require('dotenv').config();
const port = process.env.PORT || 3000;

// Middleware 
app.use(express.json());
app.use(cors());

app.use('/api/v1', rootRouter);


app.listen(port, () => {
    console.log(`Example app listening on PORT ${port}`);
});