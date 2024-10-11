import { APP_NAME } from "app/env/env";
import { cn } from "app/lib/utils";
import { HTMLAttributes, memo } from "react";
import { ThemeToggle } from "../theme-toggle/theme-toggle";
import { UserAvatarDropdown } from "../user-avatar-dropdown/user-avatar.dropdown";

interface NavBarPropsType extends HTMLAttributes<HTMLElement> {}

/**
 *
 * Renders the application's navigation bar.
 *
 */
export const NavBar: React.FunctionComponent<NavBarPropsType> = memo((props: NavBarPropsType) => {
  // props
  const { className, ...restProps } = props;

  return (
    <nav
      className={cn("flex max-h-[3.4rem] flex-row items-center justify-between gap-2 border-b border-b-border p-2", className)}
      {...restProps}
    >
      <div className="flex flex-row items-center gap-2.5">
        <h1 className="text-sm font-semibold">{APP_NAME}</h1>
      </div>
      <div className="flex flex-row gap-2">
        <ThemeToggle />
        <UserAvatarDropdown />
      </div>
    </nav>
  );
});
