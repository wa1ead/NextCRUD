import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import Employees from "../model/employee";
// CONTROLLER

// GET:
export async function getEmployees(req: NextApiRequest, res: NextApiResponse) {
  try {
    const employee: any = await Employees.find({});

    if (!employee) return res.status(404).json({ error: "Data not Found" });
    res.status(200).json(employee);
  } catch (error) {
    res.status(404).json({ error: "Error while Fetching Data" });
  }
}

export async function getEmployee(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { empId } = req.query;
    if (empId) {
      const employee = await Employees.findById(empId);
      res.status(200).json(employee);
    }
    res.status(404).json({ error: "Employee not Selected" });
  } catch (error) {
    res.status(404).json({ error: "Cannot Get Employee" });
  }
}
// POST:
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

// PUT:
export async function putEmployee(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const { empId } = req.query;
    const formData = req.body;
    if (empId && formData) {
      const employee = await Employees.findByIdAndUpdate(empId, formData);
      res.status(200).json(employee);
    }
    res.status(200).json({ error: "Employee not Selected" });
  } catch (error) {
    res.status(404).json({ error: "Error while Updating Data" });
  }
}

// DELETE:
export async function deleteEmployee(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { empId } = req.query;
    if (empId) {
      const employee = await Employees.findByIdAndDelete(empId);
      return res.status(200).json({ deleted: empId });
    }
    res.status(404).json({ error: "Employee not Selected" });
  } catch (error) {
    res.status(404).json({ error: "Eroor while Deleting Employee" });
  }
}
