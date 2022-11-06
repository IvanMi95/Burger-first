import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&family=Lobster&family=Lora:ital,wght@0,500;1,400&family=Oleo+Script+Swash+Caps&display=swap" rel="stylesheet"></link>
      </Head>
      <div id='getStarted'>
      <div id='title'> <h2>Gourmet</h2>
        <h1>Burgers</h1></div>
      <Link href="/Main"><Button variant="outline-secondary" size='lg' id='StartBtn'>Get started</Button></Link>
    </div>
    </div>
  )
}
