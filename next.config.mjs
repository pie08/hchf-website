import withLinaria from "next-with-linaria";

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
};

export default withLinaria(nextConfig);
