import Head from "@/components/head";
import Offer from "@/components/offers";
import Introduction from "@/components/introduction";
import Portfolio from "@/components/portfolio";
import Footer from "@/components/footer";
import Header from "@/components/header";
import About from "@/components/about";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen w-screen flex-col items-center justify-between`}
    >
      <Header />
      <About />
      <Footer />
    </main>
  );
}
