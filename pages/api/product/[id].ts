import type { NextApiRequest, NextApiResponse } from 'next'
import { products } from '../../../data'

type Data = {
  id: string;
  name: string;
  img: string;
  value: string;
  installment: string;
}

export default function productHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query
  const filtered = products.filter((product) => product.id === id)

  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `Product with id: ${id} not found.` })
  }
}