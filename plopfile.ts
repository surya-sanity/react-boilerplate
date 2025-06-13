// plopfile.ts

import type { NodePlopAPI } from "plop";
// Correct the import paths to include the full filename
import { componentGenerator } from "./plop/generators/component/index.ts";
import { sliceGenerator } from "./plop/generators/slice/index.ts";

export default function (plop: NodePlopAPI) {
  // Register each generator
  plop.setGenerator("component", componentGenerator);
  plop.setGenerator("slice", sliceGenerator);
}
