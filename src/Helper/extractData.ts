interface Stat {
  stat: {
    name: string
  }
  base_stat: number
}

interface Move {
  move: {
    name: string
  }
}

interface PokemonData {
  sprites: {
    front_default: string
  }
  id: number
  name: string
  types: {
    type: {
      name: string
    }
  }[]
  stats: Stat[]
  moves: Move[]
}

interface StatResult {
  name: string
  baseStat: number
}

interface ExtractedData {
  image: string
  id: number
  name: string
  type: string
  stats: StatResult[]
  moves: string[]
}

const extractStats = (stats: Stat[]): StatResult[] => {
  const result: StatResult[] = []
  stats.forEach((stat) => {
    result.push({
      name: stat.stat.name,
      baseStat: stat.base_stat,
    })
  })
  return result
}

const getBestMoves = (data: Move[]): string[] => {
  const topMoves = data.slice(0, 3)
  const result: string[] = []
  topMoves.forEach((move) => {
    result.push(move.move.name)
  })
  return result
}
export const extractData = (data: PokemonData): ExtractedData => {
  return {
    image: data?.sprites?.front_default,
    id: data?.id,
    name: data?.name,
    type: data?.types[0].type.name.toUpperCase(),
    stats: extractStats(data?.stats),
    moves: getBestMoves(data?.moves),
  }
}
