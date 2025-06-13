import * as fs from "fs";
import * as path from "path";

/**
 * The base path for all generated files.
 * Change this to 'src' or 'src/components' as needed.
 */
export const baseGeneratorPath = path.join(process.cwd(), "src/");

/**
 * Checks if a file or directory exists at the given path.
 * @param path - The path to check.
 * @returns boolean
 */
export const pathExists = (path: string): boolean => {
  return fs.existsSync(path);
};

/**
 * Converts a PascalCase string to kebab-case.
 * @param str - The string to convert.
 * @returns string
 */
export const toKebabCase = (str: string): string => {
  if (!str) return "";
  return str
    .split(/(?=[A-Z])/)
    .join("-")
    .toLowerCase();
};
