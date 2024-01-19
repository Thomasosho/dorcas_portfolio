import Head from "@/components/head";
import Offer from "@/components/offers";
import Introduction from "@/components/introduction";
import Portfolio from "@/components/portfolio";
import Footer from "@/components/footer";
import Header from "@/components/header";

export const metadata = {
  title: 'Dorcas Charles',
  description: '﹒UI/UX DESIGNER﹒GRAPHICS DESIGNER﹒LOGO DESIGNER﹒',
  metadataBase: new URL('https://dorcas-portfolio.vercel.app'),
  image: '/dorcasOne.png',
};

export default function Home() {
  return (
    <main
      className={`flex min-h-screen w-screen flex-col items-center justify-between`}
    >
      <Header />
      <Head />
      <Offer />
      <Introduction />
      <Portfolio />
      <Footer />
    </main>
  );
}
