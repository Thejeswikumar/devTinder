// connection string - mongodb+srv://namastedev:AaNYFz0LDrlD4Vem@namastenode.xwukasl.mongodb.net/

const mongoose = require('mongoose');

const connectDB = async () => {
   await mongoose.connect("mongodb+srv://namastedev:AaNYFz0LDrlD4Vem@namastenode.xwukasl.mongodb.net/devTinder");
}

module.exports = connectDB;