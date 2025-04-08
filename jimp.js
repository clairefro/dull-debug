import { Jimp } from "jimp";

export const dither = async (path, quality) => {
  let image = await Jimp.read(path);
  image = image.dither();
  return await image.getBuffer("image/jpeg", { quality });
};

export const greyscale = async (path, quality) => {
  let image = await Jimp.read(path);
  image = image.greyscale();
  return await image.getBuffer("image/jpeg", { quality });
};

export const defaultJimpQuantize = async (path, quality) => {
  let image = await Jimp.read(path);
  image.quantize({
    colors: 3,
  });
  return await image.getBuffer("image/jpeg", { quality });
};

export const qualityReduce = async (path, quality) => {
  const image = await Jimp.read(path);
  return await image.getBuffer("image/jpeg", { quality });
};
