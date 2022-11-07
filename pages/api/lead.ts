import type { NextApiRequest, NextApiResponse } from 'next';
import { leadService } from '../../services/lead';
import dbConnect from '../../utils/dbConnect';

type Response = {
  success: Boolean;
  msg: String;
  data?: Object | unknown;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Response>) {
  const { method } = req;

  await dbConnect();
  switch (method) {
    case "POST":
      const { name, email } = req.body;
      if (!name || !email) {
        return res.status(400).json({
          success: false,
          msg: 'Please provide email and password'
        })
      }
      const { data, msg, success } = await leadService(name, email);
      res.status(201).json({
        success,
        msg,
        data
      })
      break;
    default:
      res
        .status(400)
        .json({
          success: false,
          msg: "Provided method is not supported on this endpoint",
        });
      break;
  }
}