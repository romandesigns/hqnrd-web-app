/**
 * MIME type constants and image processing configuration.
 *
 * @remarks
 * This object contains categorized MIME type strings for various media formats
 * and default configuration values for image processing operations.
 *
 * @property video - Supported video MIME types
 * @property video.MP4 - MIME type for MP4 video format
 * @property video.MOV - MIME type for MOV video format
 * @property video.AVI - MIME type for AVI video format
 * @property video.MKV - MIME type for MKV video format
 *
 * @property image - Supported image MIME types
 * @property image.JPEG - MIME type for JPEG image format
 * @property image.JPG - MIME type for JPG image format
 * @property image.PNG - MIME type for PNG image format
 * @property image.WEBP - MIME type for WebP image format
 * @property image.AVIF - MIME type for AVIF image format
 *
 * @property imageQuality - Default quality setting for image compression (0.0 to 1.0)
 * @property resizeFactor - Default scaling factor for image resizing operations (0.0 to 1.0)
 *
 * @example
 * ```typescript
 * // Check if a file type matches a video MIME type
 * if (file.type === mimetypes.video.MP4) {
 *   // Handle MP4 video
 * }
 *
 * // Use image quality settings
 * const quality = mimetypes.imageQuality;
 * ```
 */

export const mimetypes = {
  video: {
    MP4: "video/mp4",
    MOV: "video/mov",
    AVI: "video/avi",
    MKV: "video/mkv",
  },
  image: {
    JPEG: "image/jpeg",
    JPG: "image/jpg",
    PNG: "image/png",
    WEBP: "image/webp",
    AVIF: "image/avif",
  },
  imageQuality: 0.85,
  resizeFactor: 0.5,
};
