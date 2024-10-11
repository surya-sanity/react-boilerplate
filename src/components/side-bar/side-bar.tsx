import { Icons } from "app/assets/icons";
import useWindowDimensions from "app/hooks/use-window-dimensions";
import { cn } from "app/lib/utils";
import { useSidebarContext } from "app/providers/sidebar-provider";
import { IconComponentType } from "app/types/icons";
import { AnimatePresence, motion } from "framer-motion";
import React, { memo, useCallback } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Button, buttonVariants } from "../ui/button";
import Logo from "../app-logo/app-logo";
import { APP_NAME } from "app/env/env";

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
  const { isSidebarOpen, setIsSidebarOpen } = useSidebarContext();

  const onMouseEnter = useCallback(() => {
    if (!isSidebarOpen) {
      setIsSidebarOpen(true);
    }
  }, [isSidebarOpen]);

  const onMouseLeave = useCallback(() => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  }, [isSidebarOpen]);

  if (isMediumScreen) {
    return null;
  }

  return (
    <AnimatePresence initial={false}>
      <motion.div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={cn(
          "fixed left-0 flex h-full w-[3.4rem] max-w-[13rem] flex-col gap-2 overflow-hidden border-r border-r-border bg-background p-2 transition-all duration-200 ease-in-out hover:w-[13rem] hover:shadow-sm "
        )}
      >
        <Button variant={"ghost"} className="mb-2 mt-1 flex flex-row items-center justify-start gap-2 px-1">
          <div className="h-7 w-[1.75rem] min-w-[1.75rem] ">
            <Logo className="h-full w-full" />
          </div>

          <AnimatePresence>
            {isSidebarOpen ? (
              <motion.div
                initial={{ x: -15, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -15, opacity: 0 }}
                className={cn(
                  "hidden max-w-0 flex-row items-center  gap-2.5 overflow-hidden whitespace-nowrap text-sm font-normal opacity-0",
                  {
                    "mr-2 block max-w-xs": isSidebarOpen,
                  }
                )}
              >
                <h1 className="text-sm font-semibold">{APP_NAME}</h1>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </Button>
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
                  <AnimatePresence>
                    {isSidebarOpen ? (
                      <motion.p
                        initial={{ x: -15, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -15, opacity: 0 }}
                        transition={{ duration: 0.1 }}
                        className={cn("hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-normal opacity-0", {
                          "mr-2 block max-w-xs": isSidebarOpen,
                          "font-medium": isActive,
                        })}
                      >
                        {name}
                      </motion.p>
                    ) : null}
                  </AnimatePresence>
                </NavLink>
              );
            })
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
});
