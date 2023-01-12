import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero/Hero'
import Navbar from '../components/NavBar/Navbar'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Car2Go</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-Roboto">
        <Navbar></Navbar>
        <Hero></Hero>
      </main>

      <footer className="">

      </footer>
    </div>
  )
}

export default Home
