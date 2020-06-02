const Movies = require("../public/data.json");

async function seeder() {
  let data = await JSON.parse(JSON.stringify(Movies));
  return data;
}

module.exports = { seeder };
