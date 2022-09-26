require("dotenv").config();
console.log('prod : ', process.env.MONGO_URI)
module.exports = {
    mongoURI:process.env.MONGO_URI
}