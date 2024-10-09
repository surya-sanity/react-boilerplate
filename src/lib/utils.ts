import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * A version of `clsx` that supports Tailwind CSS class name shortcuts in
 * addition to regular class names.
 *
 * @example
 * import { cn } from "app/lib/utils";
 *
 * const className = cn("block", "hover:underline");
 * // className is now "block hover:underline"
 *
 * @param inputs - The class names to merge. Supports Tailwind CSS class name
 * shortcuts.
 * @returns The merged class names as a single string.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
