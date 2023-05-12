import Pagina from '@/Components/Pagina'
import apiAnime from '@/services/apiAnime'
import React from 'react'

const generos = ({ generos }) => {
  return (
    <>
      <Pagina titulo='Gêneros'>
        <ul>
          {generos.map(item => (
            <li key={item.mal_id}>{item.name} ({item.count})</li>
          ))}
        </ul>
      </Pagina>
    </>
  )
}

export default generos

export async function getServerSideProps(context) {


  const resGenero = await apiAnime.get('/genres/anime')
  const generos = resGenero.data.data


  return {
    props: { generos }
  }

}