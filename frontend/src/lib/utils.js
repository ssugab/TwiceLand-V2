import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Standard utility function for combining class names with Tailwind merge.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
