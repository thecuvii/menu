import mdx from "@next/mdx";
const withMDX = mdx();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  experimental: {
    mdxRs: true,
    ppr: true,
  },
};

export default withMDX(nextConfig);
