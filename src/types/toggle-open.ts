/**
 *
 * ToggleOpenType, can be used for Modals, Panels, Sheets.
 *
 */
export interface ToggleOpenType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
