import { createContext, useContext, useMemo, useState } from "react";

type SidebarProviderProps = {
  children: React.ReactNode;
  storageKey?: string;
};

type SidebarProviderState = {
  // below states are for sidebar open state
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
};

const initialState: SidebarProviderState = {
  isSidebarOpen: false,
  setIsSidebarOpen: () => {},
};

export const SidebarProviderContext = createContext<SidebarProviderState>(initialState);

export function SidebarProvider({ children, storageKey = "sidebar-state", ...props }: Readonly<SidebarProviderProps>) {
  // states
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(() => localStorage.getItem(storageKey) === "true");

  const value: SidebarProviderState = useMemo(() => {
    return {
      setIsSidebarOpen,
      isSidebarOpen,
    };
  }, [isSidebarOpen]);

  return (
    <SidebarProviderContext.Provider {...props} value={value}>
      {children}
    </SidebarProviderContext.Provider>
  );
}

/**
 * A hook to access the current sidebar state and toggle it.
 *
 * The hook throws an error if used outside of a `SidebarProvider`.
 *
 * @returns The current state of the sidebar and a function to toggle it.
 */
export const useSidebarContext = () => {
  const context = useContext(SidebarProviderContext);

  if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider");

  return { ...context };
};
