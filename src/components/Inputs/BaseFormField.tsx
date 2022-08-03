import { DeepMap, FieldValues, FieldError } from "react-hook-form";
import { ErrorMessage } from "./ErrorMessage";

interface BaseFormFieldProps {
  formField: JSX.Element;
  name: string;
  error: boolean;
  errors: DeepMap<FieldValues, FieldError>;
  label?: string;
}

export const BaseFormField = ({
  formField,
  name,
  error,
  label,
  errors,
}: BaseFormFieldProps) => {
  return (
    <div className="form-field">
      <label className="form-label">{label}</label>
      {formField}
      {error && <ErrorMessage name={name} errors={errors} />}
    </div>
  );
};
