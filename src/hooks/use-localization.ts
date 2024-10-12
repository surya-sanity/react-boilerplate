import { useTranslation } from "react-i18next";

/**
 * Hook to handle localization.
 *
 * @returns An object with a function `onChangeLanguage` to change the language.
 */
export const useLocalization = () => {
  // hooks
  const { i18n } = useTranslation();

  const onChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return {
    onChangeLanguage,
    i18n,
  };
};
