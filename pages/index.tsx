import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import BestAdminPanel from '../components/BestAdminPanel/BestAdminPanel'
import CarToGoBenifit from '../components/CarToGoBenifit/CarToGoBenifit'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import Logos from '../components/Logos/Logos'
import Navbar from '../components/NavBar/Navbar'
import Newsletter from '../components/Newsletter/Newsletter'
import RideSharePlatform from '../components/RideSharePlatform/RideSharePlatform'
import Work from '../components/Work/Work'

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
        <Logos></Logos>
        <RideSharePlatform></RideSharePlatform>
        <Work></Work>
        <BestAdminPanel></BestAdminPanel>
        <CarToGoBenifit></CarToGoBenifit>
        <Newsletter></Newsletter>
        <Footer></Footer>
      </main>

      <footer className="">

      </footer>
    </div>
  )
}

export default Home
