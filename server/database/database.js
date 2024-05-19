const mongoose = require('mongoose')

const MONGODB_URL = process.env

main().catch(err => console.log(err));
exports.connect = () => {
    mongoose.connect("mongodb://localhost:27017/moviedb")
    .then()
    .catch((error) => {
        console.log("DB connection failed");
        console.log(error);
        process.exit(1);
    })
} 

