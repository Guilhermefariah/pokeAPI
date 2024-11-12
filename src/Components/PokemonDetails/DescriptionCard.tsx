import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import Chip from "@mui/material/Chip"
import Stack from "@mui/material/Stack"
import { useSelector } from "react-redux"

interface Pokemon {
  name: string
  image: string
  type: string
  moves?: string[]
}

export default function DescriptionCard() {
  const pokemon = useSelector((state: { pokemon: Pokemon }) => state.pokemon)

  return (
    <div className="w-full md:w-1/2 p-2">
      <Card sx={{ minWidth: 275, background: "aliceblue", color: "black", borderRadius: 10 }}>
        <CardMedia
          component="img"
          sx={{ width: 300, height: 184, margin: "auto" }}
          image={pokemon.image}
          alt={pokemon.name}
        />
        <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <Typography gutterBottom variant="h5" component="div">
            {pokemon.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            POKEMON TIPO : {pokemon.type}
          </Typography>
          <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            {pokemon.moves && (
              <Stack direction="row" spacing={1}>
                {pokemon.moves.slice(0, 3).map((move, index) => (
                  <Chip
                    key={index}
                    label={move || ""}
                    color="primary"
                    variant="outlined"
                  />
                ))}
              </Stack>
            )}
          </CardContent>
        </CardContent>
      </Card>
    </div>
  )
}
