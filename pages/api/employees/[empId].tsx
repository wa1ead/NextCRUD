import type { NextApiRequest, NextApiResponse } from "next";
import connectMongo from "../../../database/connection";
import {
  getEmployee,
  putEmployee,
  deleteEmployee,
} from "../../../database/controller";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connectMongo().catch(() =>
    res.status(405).json({ error: "Error in the Connection" })
  );

  //TYPE OF REQUEST
  const { method } = req;

  switch (method) {
    case "GET":
      getEmployee(req, res);
      break;
    case "PUT":
      putEmployee(req, res);
      break;
    case "DELETE":
      deleteEmployee(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} not Allowed`);
  }
}
