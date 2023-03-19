const BaseUrl = "http://localhost:3000";

// ALL EMPLOYEES
export const getEmployees = async () => {
  const response = await fetch(`${BaseUrl}/api/employees`);
  const json = await response.json();
  return json;
};

// SINGLE EMPLOYEE
export const getEmployee = async (empId: any) => {
  const response = await fetch(`${BaseUrl}/api/employees/${empId}`);
  const json = await response.json();
  if (json) return json;
  return {};
};

// ADD EMPLOYEE
export async function addEmployee(formData: any) {
  try {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };
    const response = await fetch(`${BaseUrl}/api/employees`, options);
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
}

// UPDATE EMPLOYEE
export async function updateEmployee(empId: any, formData: any) {
  const options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  };
  const response = await fetch(`${BaseUrl}/api/employees/${empId}`, options);
  const json = await response.json();
  return json;
}

// DELETE EMPLOYEE
export async function deleteEmployee(empId: any, formData: any) {
  const options = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  };
  const response = await fetch(`${BaseUrl}/api/employees/${empId}`, options);
  const json = await response.json();
  return json;
}
