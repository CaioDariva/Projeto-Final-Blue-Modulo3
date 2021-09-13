const mongoose = require("mongoose");

const connectToDb = () => {
    mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
};

module.exports = connectToDb;