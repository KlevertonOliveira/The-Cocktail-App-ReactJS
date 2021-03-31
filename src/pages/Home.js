import React from 'react'
import CocktailsList from '../components/CocktailsList'
import SearchForm from '../components/SearchForm'

const Home = () => {
  return (
    <main>
      <div className='container'>
        <SearchForm />
        <CocktailsList />
      </div>
    </main>
  )
}

export default Home
