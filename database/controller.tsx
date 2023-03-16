import Employees from "../model/employee";
// CONTROLLER

// GET
export async function getEmployees(req, res) {
  try {
    const employees = await Employees.find({});

    if (!employees) return res.status(404).json({ error: "Data not Found" });
    res.status(200).json(employees);
  } catch (error) {
    res.status(404).json({ error: "Error while Fetching Data" });
  }
}

// POST
export async function postEmployees(req, res) {
  try {
    const formData = req.body;
    if (!formData)
      return res.status(404).json({ error: "Form Data mot Provided...!" });
    Employees.create(formData, function (data, err) {
      return res.status(200).json(data);
    });
  } catch (error) {
    return res.status(404).json({ error });
  }
}
