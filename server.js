const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

const notificationRoutes = require("./routes/notificationRoutes");

const app = express();
app.use(bodyParser.json());
app.use("/notifications", notificationRoutes);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    app.listen(process.env.PORT || 3000, () => {
        console.log("Server started on port 3000");
    });
}).catch(err => console.log(err));
