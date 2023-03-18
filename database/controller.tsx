import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import Employees from "../model/employee";
// CONTROLLER

// GET
export async function getEmployees(req: NextApiRequest, res: NextApiResponse) {
  try {
    const employee = await Employees.find({});

    if (!employee) return res.status(404).json({ error: "Data not Found" });
    res.status(200).json(employee);
  } catch (error) {
    res.status(404).json({ error: "Error while Fetching Data" });
  }
}

// POST
export async function postEmployees(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const formData = req.body;
    if (!formData)
      return res.status(404).json({ error: "Form Data mot Provided...!" });
    Employees.create(formData, function (data: any, err: any) {
      return res.status(200).json(data);
    });
  } catch (error) {
    return res.status(404).json({ error });
  }
}
