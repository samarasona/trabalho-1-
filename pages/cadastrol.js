import Head from 'next/head'
import Image from 'next/image'

import Menu from '../components/Menu'
import styles from '../styles/Cadastro.module.css'

export default function Cadastrol() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Livro & café</title>Will
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="images/coffee-break.png" />
      </Head>
			<Menu />
      <main className={styles.main}>
       

        <form >
    <div className={styles.formulario}>
      CADASTRE UM LIVRO 
    <div>
        <label for="titulo">Título: <br/></label>
        <input type="text" id="titulo" size="45"/>
    </div>
    
    <div>
        <label for="editora">Editora: <br/></label>
        <input type="editora" id="editora" size="45"/>
    </div>
    <div>
        <label for="date">Data de publicação: <br/></label>
        <input type="date" id="data" size="45"/>
    </div>
      <div>
        <label for="money">Preço: <br/></label>
        <input type="money" id="valor" size="45"/>
    </div>
    <br/>
   <div>
     <a href="https://trabalho-1.samarafernandes.repl.co/cadastrol"><button>Entrar</button></a>
       </div>
    
    </div>
</form>
      </main>

      
    </div>
  )
}
