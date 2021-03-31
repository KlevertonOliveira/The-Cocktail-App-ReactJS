import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({ image, name, id, info, glass }) => {
  return (
    <article className='cocktail-card'>
      <img src={image} alt={name} />
      <div className='cocktail-card__content'>
        <h2>{name}</h2>
        <h3>{glass}</h3>
        <p>{info}</p>
        <Link to={`/cocktailInfo/${id}`} className='btn link-btn'>
          Details
        </Link>
      </div>
    </article>
  )
}

export default Cocktail
