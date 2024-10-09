import { cn } from "app/lib/utils";
import { ClassValue } from "clsx";
import { AnimatePresence, motion } from "framer-motion";

type ActionOverlayProps = {
  isOpen: boolean;
  children: React.ReactNode;
  className?: ClassValue;
};

/**
 *
 *
 * ActionOverlay, a centered overlay can be used for bulk actions.
 *
 *
 */
export const ActionOverlay = (props: ActionOverlayProps) => {
  // props
  const { isOpen, children, className } = props;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key={"action"}
          className={cn(
            "absolute left-[10vw] top-1 flex min-w-[10rem] items-center gap-3 rounded-lg border-[1px] border-border bg-background px-3 py-2 md:left-[25vw] lg:left-[40vw]",
            className
          )}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
