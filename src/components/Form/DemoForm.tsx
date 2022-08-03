import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { TextField } from "components";

const demoFormValidationSchema = z.object({
  firstName: z.string().min(1, "errors.required"),
});

export type DemoFormDataType = z.infer<typeof demoFormValidationSchema>;

interface DemoFormProps {
  onSubmit: SubmitHandler<DemoFormDataType>;
  isProcessing?: boolean;
}

export const DemoForm = ({ onSubmit, isProcessing }: DemoFormProps) => {
  const formMethods = useForm<DemoFormDataType>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: zodResolver(demoFormValidationSchema),
    defaultValues: {
      firstName: "",
    },
  });

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)}>
        <TextField name="firstName" />
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};
