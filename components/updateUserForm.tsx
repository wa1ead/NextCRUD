import { useReducer } from "react";
import Success from "../components/success";
import Bug from "../components/bug";
import { BiBrush } from "react-icons/bi";

const formReducer = (state: any, event: any) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

export default function UpdateUserForm() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (Object.keys(formData).length == 0)
      return console.log("Don't Have Form Data");
    console.log(formData);
  };
  if (Object.keys(formData).length > 0)
    return <Success message={"Data Added"} />;
  return (
    <form className="grid lg:grid-cols-2 w-4/6 gap-4" onSubmit={handleSubmit}>
      <div className="input-type">
        <input
          type="text"
          name="firstname"
          onChange={setFormData}
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="FirstName"
        ></input>
      </div>
      <div className="input-type">
        <input
          type="text"
          name="lastname"
          onChange={setFormData}
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="LastName"
        ></input>
      </div>
      <div className="input-type">
        <input
          type="email"
          name="email"
          onChange={setFormData}
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="Email"
        ></input>
      </div>
      <div className="input-type">
        <input
          type="number"
          name="salary"
          onChange={setFormData}
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="Salary"
        ></input>
      </div>
      <div className="input-type">
        <input
          type="date"
          name="date"
          onChange={setFormData}
          className="border px-5 py-3 focus:outline-none rounded-md"
          placeholder="Date/Time"
        ></input>
      </div>
      <div className="flex gap-10 items-center">
        <div className="form-check">
          <input
            type="radio"
            value="Active"
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
