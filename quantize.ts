import { Jimp } from "jimp";
import { buildPaletteSync, applyPaletteSync, utils } from "image-q";

export const quantize = async (inputPath: string) => {
  // Read the image using Jimp
  const image = await Jimp.read(inputPath);

  // Create a PointContainer from the image data
  const inPointContainer = utils.PointContainer.fromUint8Array(
    new Uint8Array(image.bitmap.data.buffer),
    image.bitmap.width,
    image.bitmap.height
  );

  // Build a palette and apply it to the image
  const palette = new utils.Palette();
  palette.add(utils.Point.createByRGBA(255, 255, 255, 255));
  palette.add(utils.Point.createByRGBA(0, 0, 0, 255));

  const outPointContainer = applyPaletteSync(inPointContainer, palette, {
    imageQuantization: "nearest",
  });

  // Convert the quantized PointContainer back to a Uint8Array
  const quantizedData = outPointContainer.toUint8Array();

  // Update the image data with the quantized data
  image.bitmap.data = Buffer.from(quantizedData);

  return await image.getBuffer("image/jpeg", { quality: 50 });
};
