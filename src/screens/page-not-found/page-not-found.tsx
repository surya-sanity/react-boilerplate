import { Button } from "app/components/ui/button";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const PageNotFound: React.FunctionComponent = memo(() => {
  // hooks
  const { t } = useTranslation();
  const navigate = useNavigate();

  const goHome = useCallback(() => navigate("/"), []);

  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">{t("pageNotFound.pageNotFound")}</h1>
        <p className="mt-6 text-base leading-7 text-muted-foreground">{t("pageNotFound.sorryWeCouldntFindPage")}</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button
            className="rounded-md bg-primary px-3.5 py-2 text-sm font-semibold shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary/80"
            onClick={goHome}
          >
            {t("pageNotFound.backToHome")}
          </Button>
        </div>
      </div>
    </main>
  );
});

export default PageNotFound;
