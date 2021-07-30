import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import MainNav from "./Components/Navbar.tsx"
import githublogo from './GitHub-Mark-Light-32px.png'
import Footer from './Components/footer.tsx'
import MainBody from './Components/mainbody.tsx'

export default function Home() {
  return (
    <memenifty className="container">
        <Head>
          <title>Memenifty</title>
          <meta name="tab description" content="Memenifty" />
        </Head>

        <MainNav />

        <MainBody />

        <Footer />

    </memenifty>
  )
}
