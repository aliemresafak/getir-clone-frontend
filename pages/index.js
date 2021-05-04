import Head from "next/head";
import Categories from "../components/Category/Categories";
import Cookie from "../components/Cookie";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Favorite from "../components/Favorite/Favorite";

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
      <Favorite />
      <Cookie />
    </div>
  );
}
