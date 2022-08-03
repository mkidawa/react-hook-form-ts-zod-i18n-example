import { ErrorMessage as HookFormErrorMessage } from "@hookform/error-message";
import { DeepMap } from "react-hook-form";
import { FieldError, FieldValues, Message } from "react-hook-form";
import { useTranslation } from "react-i18next";

interface ErrorMessageProps {
  name: string;
  errors: DeepMap<FieldValues, FieldError>;
}

type ErrorTranslationType = {
  message: Message;
};

export const ErrorMessage = ({ errors, name }: ErrorMessageProps) => {
  const { t } = useTranslation();

  const renderTranslatedErrorMessage = ({ message }: ErrorTranslationType) =>
    t([message], "errors.default");

  return (
    <p className="form-error">
      <HookFormErrorMessage
        errors={errors}
        name={name}
        render={renderTranslatedErrorMessage}
      />
    </p>
  );
};
