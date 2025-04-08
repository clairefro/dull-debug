const fs = require("node:fs");

const INPUT_IMG_PATH = process.argv[2];

const getSize = (path) => {
  const stats = fs.statSync(INPUT_IMG_PATH);
  return stats.size;
};

console.log(getSize(INPUT_IMG_PATH));

// CONVERT

// get after images size

// display table before after
