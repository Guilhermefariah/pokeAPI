import * as React from "react"
import { Box, LinearProgress } from "@mui/material"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import Typography from "@mui/material/Typography"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import ListItemButton from "@mui/material/ListItemButton"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import { useSelector } from "react-redux"

interface PokemonStat {
  name: string
  baseStat: number
}

interface Pokemon {
  stats?: PokemonStat[]
}

const Abilities = [
  "Hp",
  "Attack",
  "Defense",
  "Special-Attack",
  "Special-Defense",
  "Speed",
]

export default function AbilitiesCard() {
  const pokemon = useSelector((state: { pokemon: Pokemon }) => state.pokemon)

  const getPokemonStat = (stats: string): number | false => {
    const searchedStats = pokemon?.stats?.find(
      (obj) => obj.name === stats.toLowerCase()
    )
    return searchedStats ? searchedStats.baseStat : false
  }

  return (
    <div className="w-full md:w-1/2 p-2">
      <Card sx={{ minWidth: 275, background: "aliceblue", color: "black", borderRadius: 10 }}>
        <CardContent>
          <List
            dense
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {Abilities.map((value) => {
              const statValue = getPokemonStat(value);
              return (
                <ListItem key={value} disablePadding>
                  <ListItemButton>
                    <ListItemAvatar>
                      <img
                        alt={value}
                        style={{ width: "30px", height: "30px" }}
                        src={require(`../../assets/${value}.png`)}
                      />
                    </ListItemAvatar>
                    <Box key={value}>
                      <Typography variant="h6" sx={{ ml: 1}} className="nomes">
                        {value} : {statValue !== false ? statValue : "N/A"}
                      </Typography>
                      {statValue !== false && (
                        <LinearProgress
                          variant="determinate"
                          value={statValue}
                          sx={{
                            width: 200,
                            height: 10,
                            mr: 5,
                            ml: 1,
                            background: "aliceblue",
                          }}
                        />
                      )}
                    </Box>
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </CardContent>
      </Card>
    </div>
  )
}
