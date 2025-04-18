import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: isProd ? '/react-idle' : '',
  //assetPrefix: isProd ? '/_next' : '',
  trailingSlash: true,

 
 images: 
 {
  unoptimized: true,
 }
};

export default nextConfig;
