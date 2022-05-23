import Head from 'next/head'
import Image from 'next/image'

import Menu from '../components/Menu'
import styles from '../styles/Home.module.css'

export default function Contatos() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Livro & Café</title>Will
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="images/coffee-break.png" />
      </Head>
			<Menu />
      <main className={styles.main}>
        <h2 className={styles.title}>
          Faça seu cadastro aqui.       
				</h2>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Vercel
            and Replit
        </a>
      </footer>
    </div>
  )
}