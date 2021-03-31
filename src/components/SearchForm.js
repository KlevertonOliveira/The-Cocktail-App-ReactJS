import React from 'react'
import { useGlobalContext } from '../context/context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const searchContent = React.useRef('')

  React.useEffect(() => {
    searchContent.current.focus()
  }, [])

  const searchCocktail = (e) => {
    setSearchTerm(searchContent.current.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section className='form-section'>
      <form action='' className='form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='search'>Search your favorite cocktail</label>
          <input
            type='text'
            id='search'
            name='search'
            ref={searchContent}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
