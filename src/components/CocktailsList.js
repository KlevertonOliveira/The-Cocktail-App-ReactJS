import React from 'react'
import Loading from './Loading'
import { useGlobalContext } from '../context/context'
import Cocktail from './Cocktail'

const CocktailsList = () => {
  const { cocktailsList, loading } = useGlobalContext()

  if (loading) {
    return <Loading />
  } else if (cocktailsList.length < 1) {
    return (
      <div className='other-pages-content text-center'>
        <h1>No cocktails found.</h1>
      </div>
    )
  }
  return (
    <section className='cocktails-container'>
      <h1 className='grid-title text-center'>Cocktails</h1>
      <div className='container grid'>
        {cocktailsList.map((cocktail) => {
          return (
            <div className='cocktail-item'>
              <Cocktail key={cocktail.idDrink} {...cocktail} />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default CocktailsList
