import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "app/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "app/components/ui/dropdown-menu";
import { useTheme } from "app/hooks/use-theme";
import { useTranslation } from "react-i18next";

interface ThemetoggleProps {
  triggerComponent?: React.ReactNode;
  align?: "center" | "end" | "start";
}

export function ThemeToggle(props: Readonly<ThemetoggleProps>) {
  // props
  const { align, triggerComponent } = props;

  // hooks
  const { t } = useTranslation();
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {triggerComponent ?? (
          <Button variant="outline" size="icon" className="relative text-foreground">
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">{t("theme.changeTheme")}</span>
          </Button>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent align={align ?? "end"}>
        <DropdownMenuItem onClick={() => setTheme("light")}>{t("theme.light")}</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>{t("theme.dark")}</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>{t("theme.system")}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
