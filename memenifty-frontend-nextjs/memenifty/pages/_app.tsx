import type { AppProps } from 'next/app'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'jquery/dist/jquery.js'

function MyApp({ Component, pageProps }: AppProps) {

  return <Component {...pageProps} />
}



export default MyApp
