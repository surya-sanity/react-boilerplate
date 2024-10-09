/**
 *
 * ErrorFallback - Fallback component for Errorboundary.
 *
 */

import { useTranslation } from "react-i18next";

const ErrorFallback = () => {
  // hooks
  const { t } = useTranslation();

  return (
    <div className="flex h-screen w-screen flex-1 flex-col items-center justify-center gap-3 text-5xl">
      <div>{t("errors.somethingWentWrong")}</div>
    </div>
  );
};

export default ErrorFallback;
