import type { NextApiRequest, NextApiResponse } from "next";
import connectMongo from "../../../database/connection";
import { getEmployees, postEmployees } from "../../../database/controller";

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
      getEmployees(req, res);
      break;
    case "POST":
      postEmployees(req, res);
      break;
    case "PUT":
      res.status(200).json({ method, name: "PUT Request" });
      break;
    case "DELETE":
      res.status(200).json({ method, name: "DELETE Request" });
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} not Allowed`);
  }
}
