import { Ratings } from "./ratings.models"

export interface Game {
  id: string
  title: string
  genre: string
  description: string
  platform: string
  imagem: string
  ratings?: Ratings[]
}

