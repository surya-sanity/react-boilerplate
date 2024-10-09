export const AppLanguages: { [key: string]: string } = {
  "en-GB": "English",
  // add more locales here
};

/**
 * Returns an array of objects representing the available application languages.
 *
 * @return {OptionType[]} An array of objects with the language code as the value and the language name as the label.
 */
export const getAppLanguagesAsOptions = (): { value: string; label: string }[] => {
  return Object.keys(AppLanguages).map((key) => {
    return {
      value: key,
      label: AppLanguages[key],
    };
  });
};
