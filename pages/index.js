import Head from "next/head";
import Categories from "../components/Category/Categories";
import Cookie from "../components/Cookie";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Favorite from "../components/Favorite/Favorite";
import Download from "../components/Download";
import InstructionList from "../components/Instruction/InstructionList";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Getir Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Slider />
      <Categories />
      <section className="bg-gray-50 py-14">
        <div className="container mx-auto w-2/3">
          <Favorite />
          <Download />
          <InstructionList />
        </div>
      </section>
      <Cookie />
      <Footer />
    </div>
  );
}
