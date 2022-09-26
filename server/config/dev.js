require("dotenv").config();
console.log('USER :', process.env.mongo_USER)
console.log('PASSWORDS :', process.env.mongo_PASSWORDS)
module.exports = {
    mongoURI:`mongodb+srv://${process.env.mongo_USER}:${process.env.mongo_PASSWORDS}@cluster0.cvbef.mongodb.net/?retryWrites=true&w=majority`
}

