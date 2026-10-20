import type { AppProps } from "next/app";
import localFont from "next/font/local";
import "@/styles/trenox.css";

const interTight = localFont({
  src: [
    { path: "../styles/fonts/InterTight-Regular.woff2", weight: "400", style: "normal" },
    { path: "../styles/fonts/InterTight-Medium.woff2", weight: "500", style: "normal" },
    { path: "../styles/fonts/InterTight-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../styles/fonts/InterTight-Bold.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
});

const greatVibes = localFont({
  src: "../styles/fonts/GreatVibes-Regular.woff2",
  weight: "400",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* The template stylesheet reads its typefaces from these variables. */}
      <style jsx global>{`
        :root {
          --font-inter-tight: ${interTight.style.fontFamily};
          --font-great-vibes: ${greatVibes.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
