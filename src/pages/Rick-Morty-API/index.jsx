
import './style.css'
import { useEffect, useState } from 'react'
import { getCharacters } from '../../api/character'
import { Link } from 'react-router-dom'


function Rick() {
  const [conteudo, setConteudo] = useState(<>Carregando</>)


  async function TransformaEmLista() {
    const todosPersonagem = await getCharacters()
    return (todosPersonagem.map(personagem =>
      <div className='card char' key={personagem.id}>
        <img src={personagem.image} alt={`Foto de ${personagem.name}`} />
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
  useEffect(() => {
    async function carregar() {
      setConteudo(await TransformaEmLista())
    }
    carregar()
  }, [])

  return (
    <>
      <main>

        <div className='lista-principal'>
          {conteudo}
        </div>
        <div>
          <Link to='/'>
            <button class='Navegar' type="button">Navegar</button>
          </Link>
        </div>
      </main>
    </>
  )
}

export default Rick