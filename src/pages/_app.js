import "@/styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import { Marcellus_SC, Marcellus, Arapey } from "next/font/google";

const Marcellus_s = Marcellus_SC({
  weight: ["400"],
  subsets: ["latin"],
});

const Marcells = Marcellus({
  weight: ["400"],
  subsets: ["latin"],
});

const Arape = Arapey({
  weight: ["400"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        .marcellus-heading {
          font-family: ${Marcellus_s.style.fontFamily};
        }

        .marcells-paragraph {
          font-family: ${Marcells.style.fontFamily};
        }

        .arape-button {
          font-family: ${Arape.style.fontFamily};
        }

        body {
          font-family: ${Marcells.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
      <SpeedInsights />
      <Analytics />
    </>
  );
}
