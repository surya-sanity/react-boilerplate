import { cn } from "app/lib/utils";
import { HTMLAttributes, memo } from "react";
import { useTranslation } from "react-i18next";

interface ErrorStateProps extends HTMLAttributes<HTMLDivElement> {
  errorText?: string;
}

/**
 *
 * Global reusable error state component
 *
 */
export const ErrorState: React.FunctionComponent<ErrorStateProps> = memo((props: ErrorStateProps) => {
  // props
  const { className, errorText, ...restProps } = props;

  // hooks
  const { t } = useTranslation();

  return (
    <div className={cn("flex h-full w-full flex-col items-center justify-center", className)} {...restProps}>
      {errorText ?? t("errors.somethingWentWrong")}
    </div>
  );
});
