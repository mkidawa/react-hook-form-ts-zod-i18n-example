import { useController, useFormContext } from "react-hook-form";
import { ErrorMessage } from "./ErrorMessage";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  defaultValue?: string;
}

export const TextField = ({
  name,
  defaultValue,
  label,
  ...rest
}: TextFieldProps) => {
  const {
    formState: { errors },
  } = useFormContext();

  const {
    field: { ref, value, ...fieldProps },
    fieldState: { error },
  } = useController({
    name,
    defaultValue,
  });

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label>{label}</label>
      <div>
        <input {...rest} {...fieldProps} ref={ref} value={value} />
      </div>
      {error && <ErrorMessage name={name} errors={errors} />}
    </div>
  );
};
