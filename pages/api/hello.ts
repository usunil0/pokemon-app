// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  data: string
}

export default async function  handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //only get pikachu, go to http://localhost:3000/api/pokemon/{pokemonName} for any pokemon
  const data = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  const json =  await data.json()
  
  res.status(200).json({data:json})
}
