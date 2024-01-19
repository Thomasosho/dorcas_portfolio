import Head from "@/components/head";
import Footer from "@/components/footer";
import Header from "@/components/header";
import About from "@/components/about";
import Meta from "next/head";

export const metadata = {
  title: "Dorcas Charles",
  description: "﹒UI/UX DESIGNER﹒GRAPHICS DESIGNER﹒LOGO DESIGNER﹒",
  metadataBase: new URL("https://dorcas-portfolio.vercel.app"),
  image: "/dorcasOne.png",
};

export default function Home() {
  return (
    <main
      className={`flex min-h-screen w-screen flex-col items-center justify-between`}
    >
      <Meta>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:url" content={metadata.metadataBase.toString()} />
        <meta
          property="og:image"
          content={metadata.metadataBase.toString() + metadata.image}
        />
      </Meta>
      {/* <Head /> */}
      <Header />
      <About />
      <Footer />
    </main>
  );
}
