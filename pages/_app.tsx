import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { useRouter } from "next/router";
import "lenis/dist/lenis.css";
import "@/styles/trenox.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import { CartProvider } from "@/context/CartContext";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { useScrollScrubbers } from "@/hooks/useScrollScrubbers";

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
  const { asPath } = useRouter();
  const route = asPath.split("#")[0];
  useRevealOnScroll(route);
  useScrollScrubbers(route);

  return (
    <>
      {/* The template stylesheet reads its typefaces from these variables. */}
      <style jsx global>{`
        :root {
          --font-inter-tight: ${interTight.style.fontFamily};
          --font-great-vibes: ${greatVibes.style.fontFamily};
        }
      `}</style>
      <CartProvider>
        <SmoothScroll>
          <Component {...pageProps} />
        </SmoothScroll>
      </CartProvider>
    </>
  );
}
