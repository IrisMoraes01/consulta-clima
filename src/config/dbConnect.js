import mongoose from "mongoose";

mongoose.connect('mongodb+srv://adm:adm@weather.67drt.mongodb.net/weather-api?');

let db = mongoose.connection;

export default db;