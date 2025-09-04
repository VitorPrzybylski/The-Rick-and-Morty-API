import './style.css'

import { Link } from 'react-router-dom'

function Home(){

  return (
    <>
      <main>
     <Link to='/rick'>
        <button class='Navegar' type="button">Navegar</button>
     </Link>
     
      </main>
    </>
  )
}


export default Home