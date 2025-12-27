export function BackgroundBlobs() {
  return (
    <svg
      className="absolute inset-0 mx-auto h-4/5 w-4/5"
      viewBox="0 0 1100 400"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="blur" x="-50%" y="-50%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="110" />
        </filter>
      </defs>

      <g filter="url(#blur)">
        {/* Blue core */}
        <ellipse cx="520" cy="360" rx="220" ry="180" fill="#4f7cff" />

        {/* Cyan glow */}
        <ellipse cx="760" cy="300" rx="260" ry="200" fill="#4fffdc" />

        {/* Soft aqua */}
        <ellipse cx="420" cy="220" rx="240" ry="180" fill="#9cfaff" />
      </g>
    </svg>
  );
}
