import React, { memo } from "react";
import { Sheet, SheetContent } from "../ui/sheet";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../app-logo/app-logo";
import { sideBarItems } from "./side-bar";
import { APP_NAME } from "app/env/env";
import { cn } from "app/lib/utils";
import { buttonVariants } from "../ui/button";

interface ResponsiveSidebarSheetPropsType {
  isSidebarSheetOpen: boolean;
  setIsSidebarSheetOpen: (value: boolean) => void;
}

/**
 *
 * ResponsiveSidebarSheet, this below sheet is trigger on medium screens and below
 *
 */
export const ResponsiveSidebarSheet: React.FunctionComponent<ResponsiveSidebarSheetPropsType> = memo(
  (props: Readonly<ResponsiveSidebarSheetPropsType>) => {
    // props
    const { isSidebarSheetOpen, setIsSidebarSheetOpen } = props;

    // hooks
    const { pathname } = useLocation();

    return (
      <Sheet open={isSidebarSheetOpen} onOpenChange={setIsSidebarSheetOpen}>
        <SheetContent className="flex h-full w-[15rem] flex-1 flex-col gap-2 p-3 text-xs" side={"left"}>
          <NavLink to={"/home"} className={"mb-2 flex flex-row items-center gap-1.5"}>
            <Logo className="base-icon" />
            <h1 className="text-sm font-medium">{APP_NAME}</h1>
          </NavLink>
          <div className="flex h-full flex-1 flex-col gap-2 text-xs">
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
                    {Icon ? <Icon className={cn({ "text-primary": isActive })} /> : null}
                    <p className="overflow-hidden whitespace-nowrap text-sm font-normal">{name}</p>
                  </NavLink>
                );
              })
            )}
          </div>
        </SheetContent>
      </Sheet>
    );
  }
);
