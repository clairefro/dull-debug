## Dull

### Image Compression & Transformation Options

| Method                   | Description                                | Lossy / Lossless | Rough Size Reduction | Suitable for Obsidian Plugin | JS Libraries / Tools                                |
| ------------------------ | ------------------------------------------ | ---------------- | -------------------- | ---------------------------- | --------------------------------------------------- |
| **ASCII Art Conversion** | Converts image to characters; artistic     | Stylized         | 90–99% (text only)   | ✅ Cool extra mode           | `image-to-ascii`, `asciify-image`, `sharp` + custom |
| **Bit Depth Reduction**  | Reduce color depth (e.g., 8-bit → 4-bit)   | Lossy            | 20–50%               | ⚠️ Niche                     | `jimp`, `pngquant`, custom scripts                  |
| **JPEG Compression**     | Adjustable quality; great for photos       | Lossy            | 50–80%               | ✅ Yes                       | `sharp`, `jimp`, `imagemin-mozjpeg`                 |
| **PNG Optimization**     | Strips metadata, uses better filters       | Lossless         | 10–40%               | ✅ Yes                       | `sharp`, `imagemin-pngquant`, `jimp`                |
| **WebP Conversion**      | Modern format with high compression        | Both             | 30–70%               | ✅ Yes                       | `sharp`, `jimp`, `imagemin-webp`                    |
| **AVIF Conversion**      | Newer format, smaller than WebP but slower | Both             | 50–85%               | ⚠️ Experimental              | `sharp` (>=0.27), `squoosh`, `libavif`              |
| **GIF Optimization**     | Reduce frame count, color palette          | Lossy            | 20–50%               | ✅ Yes                       | `gifsicle`, `imagemin-gifsicle`                     |
| **SVG Minification**     | Removes comments/whitespace/metadata       | Lossless         | 10–80%               | ✅ Yes                       | `svgo`, `imagemin-svgo`                             |
| **Grayscale Conversion** | Removes color channels                     | Lossy            | 10–30%               | ✅ Artistic use              | `sharp`, `jimp`, `pureimage`                        |
| **Resize Compression**   | Shrinks dimensions (width/height)          | Lossy            | 30–90% (if large)    | ✅ Yes                       | `sharp`, `jimp`, `canvas`                           |
| **Chroma Subsampling**   | Drops color detail, used in JPEG/WebP      | Lossy            | Up to 30%            | 🔧 Internal setting          | `sharp` (built-in), `imagemin` configs              |
| **Dithering**            | Simulate color depth with patterns         | Lossy/stylized   | ~0% (depends)        | ✅ Optional visual mode      | `jimp`, `ditherjs`, `canvas`                        |
