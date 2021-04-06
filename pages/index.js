import Head from 'next/head'
import Header from "../components/Header";

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Getir Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header />
    </div>
  )
}
