import React, { useEffect } from "react"
import Header from "./Components/Header"
import PokemonDetails from "./Components/PokemonDetails"
import { getPokemons, URL } from "./api/PokemonApi"
import { extractData } from "./Helper/extractData"
import { useDispatch } from "react-redux"
import * as types from "./redux/actionType"
import "./index.css"

export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    getPokemons(`${URL}/pikachu`).then(({ data }) => {
      dispatch({ type: types.SET_POKEMON, payload: extractData(data) })
    })
  }, [dispatch])

  return (
    <>
      <Header />
      <PokemonDetails />
    </>
  )
}


