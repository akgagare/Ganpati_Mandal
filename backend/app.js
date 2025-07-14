const express = require('express');
const connectDB = require('./config');
const dotenv = require('dotenv');
const cors = require("cors");
const app = express();

dotenv.config();
connectDB();

const userRouter = require('./routes/UserRoute');
const donarRouter = require('./routes/Donar');
app.use(express.json());
app.use(cors());


app.use('/api/admin/',userRouter);
app.use('/api/donar/',donarRouter);

app.listen(3000,()=>{
    console.log("App Listening on PORT 3000");
});