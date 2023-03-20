import AddEmpForm from "./addEmpForm";
import UpdateEmpForm from "./updateEmpForm";
import { useSelector } from "react-redux";
import { useReducer } from "react";

const formReducer = (
  state: any,
  event: { target: { name: any; value: any } }
) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

export default function Form() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const formId = useSelector((state: any) => state.app.client.formId);

  return (
    <div className="container mx-auto py-5">
      {formId
        ? UpdateEmpForm({ formId, formData, setFormData })
        : AddEmpForm({ formData, setFormData })}
    </div>
  );
}
