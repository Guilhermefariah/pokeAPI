import axios, { AxiosResponse } from "axios"

export const URL = "https://pokeapi.co/api/v2/pokemon"
export const GET_POKEMONS = `${URL}?limit=150/`

interface PokemonResponse {
  results: Array<{ name: string; url: string }>
  name: string
  url: string
  sprites: {
    front_default: string
  }
  id: number
  types: {
    type: {
      name: string
    }
  }[]
  stats: {
    base_stat: number
    stat: {
      name: string
    }
  }[]
  moves: {
    move: {
      name: string
    }
  }[]
}

export const getPokemons = (apiURL: string): Promise<AxiosResponse<PokemonResponse>> => {
  return axios({
    method: "GET",
    url: apiURL,
  })
}
