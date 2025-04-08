import fs from "node:fs";
import printTable from "./util/printTable.js";
import { quantize } from "./quantize.ts";
import {
  dither,
  greyscale,
  defaultJimpQuantize,
  qualityReduce,
} from "./jimp.js";
import { asciify } from "./algos/ascii.js";
import path from "node:path";

// CONVERT -----
// jimp (LUX)
// pngquant (CYRENE)
// ascii art (CLAIRE)

const writeOutputandGetSize = (inPath, { algo, data, options = {} }) => {
  console.log("Writing output for algo: ", algo);
  const outPath = path.resolve(process.cwd(), "outputs", `${inPath}.${algo}`);
  fs.writeFileSync(outPath, data, options);
  return fs.statSync(outPath).size;
};

function displayTable(inPath, allAlgos) {
  const originalSize = fs.statSync(path.resolve(process.cwd(), inPath)).size;
  const outData = allAlgos.map((d) => {
    const size = writeOutputandGetSize(inPath, d);

    return {
      algo: d.algo,
      size,
      percentReduced: (((originalSize - size) / originalSize) * 100).toFixed(2),
    };
  });

  // display after size by algo , % reduction
  console.log("");
  printTable([
    ...outData,
    {
      algo: "(original)",
      size: originalSize,
    },
  ]);
  console.log("");
}

async function run() {
  const INPUT_IMG_PATH = process.argv[2];

  const allAlgos = [
    {
      algo: "quantize.jpg", // <--- your algo name
      data: await quantize(INPUT_IMG_PATH), // <--- run your algo on INPUT_IMG_PATH. await if needed
    },
    {
      algo: "dither.jpg",
      data: await dither(INPUT_IMG_PATH, 50),
    },
    {
      algo: "greyscale.jpg",
      data: await greyscale(INPUT_IMG_PATH, 50),
    },
    {
      algo: "default-jimp-quantize.jpg",
      data: await defaultJimpQuantize(INPUT_IMG_PATH, 50),
    },
    {
      algo: "asciify.txt",
      data: await asciify(INPUT_IMG_PATH),
    },
    {
      algo: "quality-50.jpg",
      data: await qualityReduce(INPUT_IMG_PATH, 50),
    },
    {
      algo: "quality-2.jpg",
      data: await qualityReduce(INPUT_IMG_PATH, 2),
    },
  ];

  displayTable(INPUT_IMG_PATH, allAlgos);
}

run();
