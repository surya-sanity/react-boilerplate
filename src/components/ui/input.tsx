import * as React from "react";

import { cn } from "app/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  disableFocusRing?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, disableFocusRing, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-9 w-full rounded-md  border-[1px] border-border bg-background px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm  file:font-medium placeholder:text-muted-foreground  focus-visible:outline-none focus-visible:ring-foreground/50 disabled:cursor-not-allowed disabled:opacity-50  dark:focus-visible:ring-neutral-300/50",
        className,
        {
          "focus-visible:ring-0": disableFocusRing,
          "focus-visible:ring-1": !disableFocusRing,
        }
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

const ErrorText = ({ err }: { err?: string }) => {
  if (!err || err === "") {
    return null;
  }
  return <span className="text-xs text-red-500">{err}</span>;
};

export { Input, ErrorText };
