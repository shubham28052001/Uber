                                      //Mongodb Connection

const mongoose = require('mongoose');
require('dotenv').config(); // .env file se environment variables load karna
async function connectToDb() {
    try {
        await mongoose.connect(process.env.Db_CONNECT, {
                          // new version me by default hai
            // useNewUrlParser: true,// MongoDB connection string ko naye parser se parse karta hai "पुराने parser की जगह नया URL parser use करो।"
           // useUnifiedTopology: true //MongoDB driver ke naye monitoring engine ko enable karta hai नया server discovery and monitoring engine use करो (ज़्यादा stable)
        });
        console.log("Connected to MongoDB ✅");
    } catch (err) {
        console.log("Connection failed ❌", err);
    }
}

module.exports = connectToDb;