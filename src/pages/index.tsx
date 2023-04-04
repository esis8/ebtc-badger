import MainFooter from '@/layouts/home/MainFooter'
import MainHeader from '@/layouts/home/MainHeader'
import Head from 'next/head'
import Link from 'next/link'




export default function Home() {
  return (
    <>
      <Head>
        <title>BadgerDAO | eBTC</title>
        <meta name="description" content="a clear path for Ethereum and Bitcoin to work together and for a sustainable BTC primitive to emerge on the Ethereum blockchain" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f2a52b" />
        <meta name="msapplication-TileColor" content="#f2a52b" />
        <meta name="theme-color" content="#f2a52b"></meta>
      </Head>
      <main>
        <header >
          <MainHeader />
        </header>
        
        <section className="main__section">
          <div className='main__title'>
            <h1>Decentralized, On Chain Wrapped Bitcoin</h1>
            <p>Fully On-chain Bitcoin on the Ethereum network.</p>
            <Link href="/eBTC"><button>Go To App</button></Link>
          </div>
          <video width="100%" autoPlay loop>
          <source src="/video/BadgerDAO.mp4" type="video/mp4" />
          Your browser does not support the video tag.
          </video>
        </section>

        <footer>
          <MainFooter />
        </footer>

      </main>
    </>
  )
}
