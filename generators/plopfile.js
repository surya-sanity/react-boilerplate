import { componentGenerator } from "./component/index.js";

export default function plop(plop) {
  plop.setGenerator("component", componentGenerator);
}
