var express = require("express");
var router = express.Router();

const Movie = require("../models/Movies");
const { seeder } = require("../utils/seeder");
const upseed = require("../utils/seedUp");

//application level seeder
router.use(async (req, res, next) => {
  try {
    let count = await Movie.countDocuments({}).exec();
    if (count === 0) {
      let values = await seeder();
      if (await upseed(values)) {
        next();
      } else {
        res.status(500).json({
          status: "500",
          message: "data failed to upload",
        });
      }
    } else {
      next();
    }
  } catch (error) {
    res.json({
      status: "500",
      message: error.message,
    });
  }
});

//end-point to retrieve all movies
router.get("/", async (req, res) => {
  try {
    let response = await Movie.find({});
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({
      status: "400",
      message: error.message,
    });
  }
});

module.exports = router;
