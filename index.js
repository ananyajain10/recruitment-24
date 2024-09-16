const express = require('express');
const bodyparser = require("body-parser");
const cors = require('cors');
require('dotenv').config();
require('./utils/db.js').connect();
const apilimit = require('./utils/limiter.js')
const cookieparser = require('cookie-parser');
const userRoute = require('./routes/userRoutes.js');
const getRoute = require('./routes/getRoutes.js');
// const authRoute = require('./routes/authRoutes.js');
// const authentication = require('./utils/authentication.js');

const app = express();

app.use(bodyparser.json());
app.use(express());
app.use(express.json());
app.use(cookieparser());
app.use(cors());

app.use('/v1/user', apilimit, userRoute);
app.use('/v1/get', getRoute);
app.get('/', (req, res) => {
    return res.status(201).json({ msg: "Server is Live!!🚀" })
})

app.listen(process.env.PORT,() => {
    console.log(`server running on port ${process.env.PORT}`);
});