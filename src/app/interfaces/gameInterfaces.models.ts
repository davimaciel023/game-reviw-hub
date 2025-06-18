export interface Game {
  id: string
  title: string
  genre: string
  description: string
  platform: string
  imagem: string
  ratings: []
}

export interface Ratings {
  name: string
  stars: number
  comment: string
}
