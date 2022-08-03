import { z } from "zod";

export const demoFormValidationSchema = z.object({
  firstName: z.string().min(1, "errors.required"),
  password: z
    .string()
    .transform((val) => val.trim())
    .superRefine((val, ctx) => {
      const fieldValidationResult = z
        .string()
        .min(1, "errors.required")
        .min(8, { message: "errors.tooShort" })
        .safeParse(val);

      const includesLowerCase = /[a-z]/.test(val);
      const includesUpperCase = /[A-Z]/.test(val);
      const includesDigit = /[\d]/.test(val);
      const includesSpecialChar = /[^\d\w\s]/.test(val);

      if (
        !includesLowerCase ||
        !includesUpperCase ||
        !includesDigit ||
        !includesSpecialChar
      ) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "errors.incorrectPassword",
        });
      }
      if (!fieldValidationResult.success) {
        ctx.addIssue(fieldValidationResult.error.issues[0]);
      }
    }),
});

export type DemoFormDataType = z.infer<typeof demoFormValidationSchema>;
