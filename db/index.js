const mongoose = require("mongoose");

const db = async (cb) => {
  try {
    let connection = await mongoose.connect(
      "mongodb://localhost:27017/test123",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
    return cb(null, connection);
  } catch (error) {
    return cb(error.message, null);
  }
};

module.exports = { mongoose, db };
