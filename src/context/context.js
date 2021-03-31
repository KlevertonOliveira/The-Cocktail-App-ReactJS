import React, { useState, useEffect, useContext, useCallback } from 'react'

const AppContext = React.createContext()
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('a')
  const [cocktailsList, setCocktailsList] = useState([])

  const fetchData = useCallback(async () => {
    setLoading(true)
    try {
      const response = await fetch(`${url}${searchTerm}`)
      const cocktailsData = await response.json()
      console.log(cocktailsData)
      const { drinks } = cocktailsData
      if (drinks) {
        const newCocktailList = drinks.map((item) => {
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass,
          } = item

          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          }
        })

        setCocktailsList(newCocktailList)
      } else {
        setCocktailsList([])
      }
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }, [searchTerm])

  useEffect(() => {
    fetchData()
  }, [searchTerm, fetchData])

  return (
    <AppContext.Provider
      value={{
        loading,
        cocktailsList,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
