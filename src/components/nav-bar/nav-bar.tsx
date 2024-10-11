import { APP_NAME } from "app/env/env";
import { cn } from "app/lib/utils";
import { HTMLAttributes, memo, useCallback } from "react";
import { ThemeToggle } from "../theme-toggle/theme-toggle";
import { UserAvatarDropdown } from "../user-avatar-dropdown/user-avatar.dropdown";
import { Button } from "../ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { ResponsiveSidebarSheet } from "../side-bar/responsive-side-bar-sheet";
import { useSidebarContext } from "app/providers/sidebar-provider";
import useWindowDimensions from "app/hooks/use-window-dimensions";

interface NavBarPropsType extends HTMLAttributes<HTMLElement> {}

/**
 *
 * Renders the application's navigation bar.
 *
 */
export const NavBar: React.FunctionComponent<NavBarPropsType> = memo((props: NavBarPropsType) => {
  // props
  const { className, ...restProps } = props;

  // hooks
  const { isSidebarOpen, setIsSidebarOpen } = useSidebarContext();
  const { isMediumScreen } = useWindowDimensions();

  const onMenuClick = useCallback(() => {
    setIsSidebarOpen(!isSidebarOpen);
  }, [isSidebarOpen, setIsSidebarOpen]);

  return (
    <nav
      className={cn("flex max-h-[3.4rem] flex-row items-center justify-between gap-2 border-b border-b-border p-2 md:pl-3.5", className)}
      {...restProps}
    >
      {isMediumScreen ? <ResponsiveSidebarSheet isSidebarSheetOpen={isSidebarOpen} setIsSidebarSheetOpen={setIsSidebarOpen} /> : null}
      <div className="flex flex-row items-center gap-2">
        <Button
          size={"icon"}
          variant={"ghost"}
          className="flex flex-row items-center justify-center gap-2 px-1 md:hidden"
          onClick={onMenuClick}
        >
          <HamburgerMenuIcon className="base-icon" />
        </Button>
        <h1 className="text-sm font-semibold">{APP_NAME}</h1>
      </div>
      <div className="flex flex-row gap-2">
        <ThemeToggle />
        <UserAvatarDropdown />
      </div>
    </nav>
  );
});
