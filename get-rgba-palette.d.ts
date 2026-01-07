// src/types/get-rgba-palette.d.ts
declare module 'get-rgba-palette' {
    type RGBA = [number, number, number, number];

    function getPalette(
        pixels: Uint8Array | Buffer,
        colorCount?: number
    ): RGBA[];

    export default getPalette;
}
