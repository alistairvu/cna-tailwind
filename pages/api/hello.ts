import type { NextApiRequest, NextApiResponse } from "next"
import nc from "next-connect"

const sayHello = (req: NextApiRequest, res: NextApiResponse) => {
  res.send({ name: "John Doe" })
}

export default nc().get(sayHello)
