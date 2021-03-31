import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'

export default function CocktailInfo() {
  const { id } = useParams()
  const [loading, setLoading] = React.useState(false)
  const [cocktail, setCocktail] = React.useState(null)
  console.log(id)
  React.useEffect(() => {
    setLoading(true)
    async function getCocktail() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        )
        const data = await response.json()
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0]
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ]
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          }
          setCocktail(newCocktail)
        } else {
          setCocktail(null)
        }
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    getCocktail()
  }, [id])

  if (loading) {
    return <Loading />
  }

  if (!cocktail) {
    return <h2 className='section-title'>no cocktail to display</h2>
  } else {
    const {
      name,
      image,
      category,
      info,
      glass,
      instructions,
      ingredients,
    } = cocktail

    return (
      <main className='container'>
        <h1 className='cocktail-title text-center'>{name}</h1>
        <div className='cocktail-content'>
          <div className='cocktail-image'>
            <img src={image} className='cocktail-img' alt={name} />
          </div>

          <div className='cocktail-info'>
            <p>
              <span className='drink-info'>Name:</span> {name}
            </p>
            <p>
              <span className='drink-info'>Category:</span> {category}
            </p>
            <p>
              <span className='drink-info'>Info:</span> {info}
            </p>
            <p>
              <span className='drink-info'>Glass:</span> {glass}
            </p>
            <p className='instructions'>
              <span className='drink-info'>Instructions:</span>
              {instructions}
            </p>
            <p>
              <span className='drink-info'>Ingredients:</span>
              {ingredients.map((item, index) => {
                return item ? (
                  <span key={index} className='ingredient'>
                    {item}
                  </span>
                ) : null
              })}
            </p>
          </div>
        </div>
        <div className='return'>
          <Link to='/' className='btn link-btn'>
            Back to Home
          </Link>
        </div>
      </main>
    )
  }
}
