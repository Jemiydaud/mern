const mongoose = require ("mongoose");


mongoose.connect(url, {useNewUrlParser: true,useUnifiedTopology: true});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));