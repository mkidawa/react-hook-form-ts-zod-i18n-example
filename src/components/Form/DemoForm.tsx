import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField } from "components";
import { DemoFormDataType, demoFormValidationSchema } from "types";

interface DemoFormProps {
  onSubmit: SubmitHandler<DemoFormDataType>;
}

export const DemoForm = ({ onSubmit }: DemoFormProps) => {
  const formMethods = useForm<DemoFormDataType>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: zodResolver(demoFormValidationSchema),
    defaultValues: {
      firstName: "",
      password: "",
    },
  });

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)}>
        <TextField label="First name" name="firstName" />
        <TextField type="password" label="Password" name="password" />
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};
