import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "app/components/ui/dropdown-menu";
import { cn } from "app/lib/utils";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";

interface UserAvatarDropdownProps {
  className?: string;
  triggerComponent?: React.ReactNode;
}

/**
 *
 * UserAvatarDropdown, renders the user avatar dropdown menu
 *
 */
export const UserAvatarDropdown: React.FunctionComponent<UserAvatarDropdownProps> = memo((props: Readonly<UserAvatarDropdownProps>) => {
  // props
  const { className, triggerComponent } = props;

  // hooks
  const { t } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {triggerComponent ?? (
          <Button variant={"ghost"} size={"icon"}>
            <Avatar className={cn("h-7 w-7", className)}>
              <AvatarFallback className="bg-primary text-xs uppercase text-white dark:text-black">J</AvatarFallback>
            </Avatar>
          </Button>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <div className="min-h-[1.1rem] truncate text-ellipsis break-all text-sm font-medium leading-none">John Doe</div>
            <div className="min-h-[1rem] truncate text-ellipsis break-all text-xs leading-none text-muted-foreground">
              johndoe@example.com
            </div>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />
        <DropdownMenuItem isDestructive>{t("common.logout")}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
});
