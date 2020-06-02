const Movie = require("../models/Movies");

module.exports = async function upSeed(movies) {
  let value = movies.map(async ({ name, img, summary }) => {
    let data = new Movie({
      name,
      img,
      summary,
    });
    return await data.save();
  });
  let res = await Promise.all(value);
  res = res.includes[undefined];
  return !res;
};
