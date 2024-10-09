import { cn } from "app/lib/utils";
import { HTMLAttributes, memo } from "react";
import Spinner from "../spinner/spinner";

interface LoadingStatePropsType extends HTMLAttributes<HTMLDivElement> {
  loadingMessage?: string;
  compact?: boolean;
}
/**
 *
 * LoadingState
 *
 */
export const LoadingState: React.FunctionComponent<LoadingStatePropsType> = memo((props: LoadingStatePropsType) => {
  // props
  const { loadingMessage, compact, className, ...restProps } = props;

  return (
    <div className={cn("flex flex-row items-center justify-center gap-2 text-xs", !compact && "h-full w-full flex-1")} {...restProps}>
      <Spinner />
      {loadingMessage ? <span className="line-clamp-1 text-ellipsis text-muted-foreground">{loadingMessage}</span> : "Loading..."}
    </div>
  );
});
