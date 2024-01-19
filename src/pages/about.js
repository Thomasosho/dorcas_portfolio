import Head from "@/components/head";
import Offer from "@/components/offers";
import Introduction from "@/components/introduction";
import Portfolio from "@/components/portfolio";
import Footer from "@/components/footer";
import Header from "@/components/header";

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
