import type { NextApiRequest, NextApiResponse } from 'next'
import { products } from '../../../data'

type Data = {
  id: string;
  name: string;
  img: string;
  value: string;
  installment: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json(products)
}