const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    // unique: true,
    required: true,
  },
  img: {
    type: String,
    // unique: true,
    required: true,
  },
  summary: {
    type: String,
    // unique: true,
    required: true,
  },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
