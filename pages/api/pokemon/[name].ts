// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  data: string
}

export default async function  handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name } = req.query

  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  const json =  await data.json()
  
  res.status(200).json({data:json})
}
