import { Outlet } from "react-router-dom";
import { Sidebar } from "../side-bar/side-bar";
import { NavBar } from "../nav-bar/nav-bar";

/**
 *
 * OutletWrapper, wraps the main outlet within the sidebar and other
 * root shell components
 *
 */
export const OutletWrapper = () => {
  return (
    /**
     *
     * Here getting the full viewports size and making as full flex, so that scaled screens can be
     * managed easily within the outlet
     *
     */
    <main className="flex h-screen w-screen flex-1 flex-col overflow-hidden text-sm">
      <NavBar />
      <div className="flex h-full flex-1 overflow-hidden">
        <Sidebar />
        <Outlet />
      </div>
    </main>
  );
};
