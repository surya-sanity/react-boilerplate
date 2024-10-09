import { Icons } from "app/assets/icons";
import useWindowDimensions from "app/hooks/use-window-dimensions";
import { cn } from "app/lib/utils";
import { useSidebarContext } from "app/providers/sidebar-provider";
import { IconComponentType } from "app/types/icons";
import { AnimatePresence, motion } from "framer-motion";
import React, { memo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { buttonVariants } from "../ui/button";

interface SidebarMenuItemType {
  name: string;
  Icon: IconComponentType;
  to: string;
}

export const sideBarItems: SidebarMenuItemType[] = [
  {
    name: "Home",
    Icon: Icons.Home,
    to: "/home",
  },
  // add more sidebar items here
];

/**
 *
 * Sidebar
 *
 */
export const Sidebar: React.FunctionComponent = memo(() => {
  // hooks
  const { pathname } = useLocation();
  const { isMediumScreen } = useWindowDimensions();
  const { isSidebarOpen } = useSidebarContext();

  if (isMediumScreen) {
    return null;
  }

  return (
    <AnimatePresence initial={false}>
      <motion.div
        initial={{ width: "2rem" }}
        animate={{ width: isSidebarOpen ? "13rem" : "3.5rem" }}
        transition={{ duration: 0.1 }}
        exit={{ width: "2rem" }}
        className={cn(
          "flex h-full max-w-[13rem] flex-col gap-2 overflow-hidden border-r border-r-border p-2 transition-all duration-200 ease-in-out hover:shadow-sm"
        )}
      >
        <div className="flex h-full flex-1 flex-col gap-2 overflow-y-auto ">
          {React.Children.toArray(
            sideBarItems.map((item) => {
              const { Icon, name, to } = item;
              const isActive = to === pathname;

              return (
                <NavLink
                  to={to}
                  end
                  className={() =>
                    cn(
                      buttonVariants({
                        variant: "ghost",
                        className: "flex flex-row items-center justify-start gap-3 rounded-md p-2",
                      }),
                      {
                        "!bg-primary/5": isActive,
                      }
                    )
                  }
                >
                  {Icon ? <Icon className={cn("min-w-[1.3rem]", { "text-primary": isActive })} /> : null}
                  <p
                    className={cn(
                      "hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-normal opacity-0 transition-all duration-200",
                      { "mr-2 block max-w-xs opacity-100": isSidebarOpen }
                    )}
                  >
                    {name}
                  </p>
                </NavLink>
              );
            })
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
});
