/**
 * Component Generator
 */

import inquirer from "inquirer";
import inquirerDirectory from "inquirer-directory";
import { baseGeneratorPath } from "../paths.js";
import { pathExists } from "../utils/index.js";

inquirer.registerPrompt("directory", inquirerDirectory);

export const componentGenerator = {
  description: "Add a component",
  prompts: [
    {
      type: "input",
      name: "componentName",
      message: "What should it be called? (PascalCase , for example: MyComponent)",
    },
    {
      type: "directory",
      name: "path",
      message: "Where do you want it to be created?",
      basePath: `${baseGeneratorPath}`,
    },
    {
      type: "confirm",
      name: "wrapInFolder",
      message: "Do you want to wrap your component in a folder of the same name?",
      default: false,
    },
    {
      type: "confirm",
      name: "wantMemo",
      default: false,
      message: "Do you want to wrap your component in React.memo?",
    },
  ],
  actions: (data) => {
    const answers = data;

    // convert into kebab case for folder name.
    const componentName = answers.componentName
      .split(/(?=[A-Z])/)
      .join("-")
      .toLowerCase();

    const wrapInFolder = answers.wrapInFolder
      ? `/${answers.componentName}`
      : "";

    const componentPath = `${baseGeneratorPath}/${answers.path}/${wrapInFolder}`;
    const actualComponentPath = `${baseGeneratorPath}/${answers.path}/${answers.componentName}`;

    if (pathExists(actualComponentPath)) {
      throw new Error(`Component '${answers.componentName}' already exists`);
    }

    const actions = [
      {
        type: "add",
        path: `${componentPath}/${componentName}.tsx`,
        templateFile: "./component/index.tsx.hbs",
        abortOnFail: true,
      },
    ];

    return actions;
  },
};
