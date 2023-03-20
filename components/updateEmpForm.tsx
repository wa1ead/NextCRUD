import { useReducer } from "react";
import { useQuery, useQueryClient, useMutation } from "react-query";
import { getEmployee, updateEmployee, getEmployees } from "../library/helper";
import Success from "./success";
import Bug from "./bug";
import { BiBrush } from "react-icons/bi";

export default function updateEmpForm({ formId, formData, setFormData }: any) {
  const queryClient = useQueryClient();
  const { isLoading, isError, data, error } = useQuery(
    ["employees", formId],
    () => getEmployee(formId)
  );
  const UpdateMutation = useMutation(
    (newData) => updateEmployee(formId, newData),
    {
      onSuccess: async (data) => {
        // queryClient.setQueryData("employees", (old) => [data]);
        queryClient.prefetchQuery("employees", getEmployees);
      },
    }
  );

  if (isLoading) return <div>Loading ...!</div>;
  if (isError) return <div>Error</div>;

  const { name, avatar, email, salary, date, status } = data;
  const [firstname, lastname] = name ? name.split(" ") : formData;

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let userName = `${formData.firstname ?? firstname} ${
      formData.lastname ?? lastname
    }`;
    let updated = Object.assign({}, data, formData, { name: userName });
    console.log(updated);
    await UpdateMutation.mutate(updated);
  };
  return (
    <form className="grid lg:grid-cols-2 w-4/6 gap-4" onSubmit={handleSubmit}>
      <div className="input-type">
        <input
          type="text"
          name="firstname"
          onChange={setFormData}
          defaultValue={firstname}
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="FirstName"
        ></input>
      </div>
      <div className="input-type">
        <input
          type="text"
          name="lastname"
          onChange={setFormData}
          defaultValue={lastname}
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="LastName"
        ></input>
      </div>
      <div className="input-type">
        <input
          type="email"
          name="email"
          onChange={setFormData}
          defaultValue={email}
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="Email"
        ></input>
      </div>
      <div className="input-type">
        <input
          type="number"
          name="salary"
          onChange={setFormData}
          defaultValue={salary}
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="Salary"
        ></input>
      </div>
      <div className="input-type">
        <input
          type="date"
          name="date"
          onChange={setFormData}
          defaultValue={date}
          className="border px-5 py-3 focus:outline-none rounded-md"
          placeholder="Date/Time"
        ></input>
      </div>
      <div className="flex gap-10 items-center">
        <div className="form-check">
          <input
            type="radio"
            value="Active"
            defaultChecked={status == "Active"}
            onChange={setFormData}
            id="radioDefault1"
            name="status"
            className="form-check-input appearence-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          />
          <label
            htmlFor="radioDefault1"
            className="inline-block text-white-800"
          >
            {" "}
            Active{" "}
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            value="Inactive"
            defaultChecked={status !== "Active"}
            onChange={setFormData}
            id="radioDefault2"
            name="status"
            className="form-check-input appearence-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          />
          <label
            htmlFor="radioDefault2"
            className="inline-block text-white-800"
          >
            {" "}
            Inactive{" "}
          </label>
        </div>
      </div>
      <button
        className="flex justify-center text-md w-2/6 bg-yellow-400 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-black"
        onChange={setFormData}
      >
        {" "}
        UPDATE{" "}
        <span className="px-1">
          <BiBrush size={24} />
        </span>
      </button>
    </form>
  );
}
