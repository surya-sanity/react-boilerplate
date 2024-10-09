import fs from "fs";

export function pathExists(path) {
  return fs.existsSync(path);
}
