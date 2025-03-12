import { useEffect, useState } from 'react';
import './favoritos.css'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Favoritos(){

  const [filmes, setFilmes] = useState([])

  useEffect(()=>{

    const minhaLista = localStorage.getItem('@primeflix')
    setFilmes(JSON.parse(minhaLista) || [])
  }, [])

  function excluir(id){
    let filtroFilmes = filmes.filter((item) => {
      return(item.id !== id)
    })
    setFilmes(filtroFilmes)
    localStorage.setItem('@primeflix', JSON.stringify(filtroFilmes))  
    toast.success('Filme removido com sucesso')
  }

  return(
    <div className='favoritos'>
      <h1>Meus filmes</h1>

      {filmes.length === 0 && <span>Parece que ainda não possui nenhum filme salvo :/</span>}

      <ul>
        {filmes.map((item)=>{
          return(
            <li key={item.id}>
              <span>{item.title}</span>
              <div>
                <Link to={`/filmes/${item.id}`}>Ver detalhes</Link>
                <button onClick={ () => excluir(item.id) }>Excluir</button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Favoritos;