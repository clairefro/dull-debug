import asciifyImage from "asciify-image";

async function asciify(inPath) {
  // console.log({ inPath });
  // Run the asciify function with the input image
  const asciified = await asciifyImage(inPath, {
    fit: "box",
    color: false,
    width: 100,
    height: 100,
    format: "string",
  });

  return asciified;
}
export { asciify };
