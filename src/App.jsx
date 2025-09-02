
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'


function App() {
  const [conteudo, setConteudo]=useState(<>Carregando</>)
async function PegarConteudo(){
  //vai realizar o Fetch para a api do Rick and Morty - Usando Axios
  //GET = buscar info
  //POST = adicionar info
  //PUT = alterar info
  //DELETE = deletar info
  const requestOptions={
    method:'GET'
  }
  const response = await fetch(
    'https://rickandmortyapi.com/api/character',
    requestOptions
  )
  if(!response.ok){
    return []
  }



  const data = await response.json()
  
  return data.results
}

async function TransformaEmLista(){
  const todosPersonagem = await PegarConteudo()
  return(todosPersonagem.map(personagem =>
    <div className='card char' key={personagem.id}>
      <img src={personagem.image} alt={`Foto de ${personagem.name}`}/>
      <h2>{personagem.name}</h2>
      <div className='char-info'>
        <span><b>Espécie: </b>{personagem.species}</span>
        <span><b>Gênero: </b>{personagem.gender}</span>
        <span><b>Estado: </b>{personagem.status}</span>
      </div>

      <div>
        <div className='lista-secundaria'>
          <b>Participações:</b>
          {/*traga as informaçoes (=personagem.episode.map()*/}
        </div>
      </div>
    </div>
  )
  )

}
useEffect(()=>{
async function carregar(){
    setConteudo(await TransformaEmLista())
  }
  carregar()
},[])

  return (
    <>
      <Header />
      <main>

        <div className='lista-principal'>
          {conteudo}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
