import "@/pages/globals.css";
//import { Geist, Geist_Mono } from "next/font/google";
import type { AppProps } from "next/app";

export const metadata = {
  title: "React Idle",
  description: "Some cool idle stuff",
};

/*
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});*/


export default function App ({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  );
}