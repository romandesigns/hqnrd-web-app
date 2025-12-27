import path from 'path';
import getPixels from 'get-pixels';
import getPalette from 'get-rgba-palette';

function getPixelsAsync(filePath: string) {
  return new Promise<any>((resolve, reject) => {
    getPixels(filePath, (err, pixels) => {
      if (err) reject(err);
      else resolve(pixels);
    });
  });
}

export async function getDominantPaletteFromPublicPath(publicPath: string, colorCount = 5) {
  const absPath = path.join(process.cwd(), 'public', publicPath);
  const pixels = await getPixelsAsync(absPath);

  // returns array like [[r,g,b,a], ...]
  const palette = getPalette(pixels.data, colorCount);

  // normalize to hex
  const hex = palette.map(
    ([r, g, b]: number[]) => `#${[r, g, b].map((n) => n.toString(16).padStart(2, '0')).join('')}`,
  );

  return { palette, hex };
}
