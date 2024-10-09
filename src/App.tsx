import { ThemeProvider } from "app/providers/theme-provider";
import { persistor, store } from "app/store/store";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import AppWrapper from "./components/app-wrapper/app-wrapper";
import ErrorFallback from "./components/error-fallback/error-fallback";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import { SidebarProvider } from "./providers/sidebar-provider";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider defaultTheme="system">
            <SidebarProvider>
              <TooltipProvider>
                <HelmetProvider>
                  <AppWrapper />
                  <Toaster />
                </HelmetProvider>
              </TooltipProvider>
            </SidebarProvider>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
