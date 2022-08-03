import { useController, useFormContext } from "react-hook-form";
import { BaseFormField } from "./BaseFormField";

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
    <BaseFormField
      formField={<input {...rest} {...fieldProps} ref={ref} value={value} />}
      name={name}
      label={label}
      error={!!error}
      errors={errors}
    />
  );
};
