export default function Logo({ className }) {
  return (
    <img
      className={className}
      srcSet="/assets/images/logos/1x/HCHF-logo-black.webp 1x, /assets/images/logos/2x/HCHF-logo-black.webp 2x"
      alt="Half century health and fitness logo"
      src="/assets/images/logos/1x/HCHF-logo-black.webp"
    />
  );
}
