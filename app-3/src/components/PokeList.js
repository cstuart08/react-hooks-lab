import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const PokeList = (props) => {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon').then((res) => {
      setPokemon(res.data.results)
    })
  }, [])

  return (
    <div>
      {pokemon.map((pokemon) => {
        return (
          <Link key={pokemon.url} to={`/pokemon/${pokemon.name}`} name={pokemon.name}>
            <h2>{pokemon.name}</h2>
          </Link>
        )
      })}
    </div>
  )
}
export default PokeList