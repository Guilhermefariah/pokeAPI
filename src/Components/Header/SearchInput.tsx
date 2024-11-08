import React, { useState, useEffect } from "react"
import { Autocomplete, TextField, Box, Button } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import { getPokemons, GET_POKEMONS, URL } from "../../api/PokemonApi"
import { useDispatch } from "react-redux"
import { extractData } from '../../Helper/extractData'
import * as types from "../../redux/actionType"

interface Pokemon {
  name: string
  url: string
  label: string
}

export default function SearchInput() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([])
  const [inputValue, setValueInput] = useState<string>("")
  const dispatch = useDispatch()

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    getPokemons(`${URL}/${inputValue}`).then(({ data }) => {
      dispatch({ type: types.SET_POKEMON, payload: extractData(data) })
    })
  }

  useEffect(() => {
    getPokemons(GET_POKEMONS)
      .then(({ data }) => {
        const listData = data.results.map((item: { name: string; url: string }) => ({
          ...item,
          label: item.name,
        }))

        setPokemonList(listData)
      })
      .catch((Error) => {
        console.error(Error)
      })
  }, [])

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: { xs: "column", sm: "row" },
        width: { xs: "80%", sm: "60%", md: "40%", lg: "30%" },
        p: 1,
        mr: { xs: 0, sm: 1 },
        mt: { xs: 2, sm: 0 },
        borderRadius: 1,
        backgroundColor: "primary.contrastText",
      }}
      component="form"
      onSubmit={handleSubmit}
      className="searchBox"
    >
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={pokemonList}
        sx={{
          width: { xs: "100%", sm: 300 },
          color: " primary.main",
          mb: { xs: 2, sm: 0 },
        }}
        onChange={(e, newEvent) => {
          if (newEvent) setValueInput(newEvent.name);
        }}
        renderInput={(params) => (
          <TextField {...params} label="Search your Pokemon" />
        )}
      />
      <Button variant="contained" type="submit" sx={{ minWidth: { xs: "100%", sm: "auto" } }}>
        <SearchIcon />
      </Button>
    </Box>
  )
}
