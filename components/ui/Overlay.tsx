export function Overlay() {
  return (
    <>
      <div className="absolute inset-0 z-2 bg-linear-to-b from-transparent via-transparent to-black/85" />
      <div className="absolute inset-0 z-1 bg-black/30" />
      <div className="absolute inset-0 z-1 bg-radial-[at_25%_25%] from-transparent to-black/50 to-75%" />
    </>
  );
}
