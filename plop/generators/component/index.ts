// plop/generators/component/index.ts

import type { PlopGeneratorConfig, ActionType } from "plop";
import type { Question } from "inquirer"; // Import the base Question type
import inquirer from "inquirer";
import inquirerDirectory from "inquirer-directory";
import path from "path"; // Import path for path.join
import { baseGeneratorPath, pathExists, toKebabCase } from "../../utils.ts";

// Register the 'directory' prompt type
inquirer.registerPrompt("directory", inquirerDirectory);

// --- SOLUTION PART 1: Define the custom question type ---
type DirectoryQuestion = Question & {
  basePath: string;
};

// Define the answers interface for type safety
interface ComponentAnswers {
  componentName: string;
  path: string;
  wantMemo: boolean;
  wrapFolder: boolean;
}

export const componentGenerator: PlopGeneratorConfig = {
  description: "Add a new React component",
  // --- SOLUTION PART 2: Explicitly type the prompts array ---
  prompts: [
    {
      type: "input",
      name: "componentName",
      message: "What should it be called? (PascalCase, e.g., TodoList)",
      validate: (input: string) => {
        if (!/^[A-Z][A-Za-z0-9]+$/.test(input)) {
          return "Component name must be in PascalCase.";
        }
        return true;
      },
    },
    // Use the custom type for this specific prompt object
    {
      type: "directory",
      name: "path",
      message: "Where do you want it to be created?",
      basePath: baseGeneratorPath,
    } as DirectoryQuestion, // <-- Type assertion here
    {
      type: "confirm",
      name: "wantMemo",
      default: false,
      message: "Do you want to wrap your component in React.memo?",
    },
    {
      type: "confirm",
      name: "wrapFolder",
      default: true,
      message: "Do you want to create the component inside its own folder?",
    },
  ],
  actions: (data) => {
    // ... (rest of your actions function remains the same)
    const answers = data as ComponentAnswers;

    const componentFolder = answers.wrapFolder ? toKebabCase(answers.componentName) : "";
    // Use path.join for cross-platform compatibility
    const componentPath = path.join(baseGeneratorPath, answers.path, componentFolder);
    const actualComponentPath = path.join(componentPath, `${answers.componentName}.tsx`);

    if (pathExists(actualComponentPath)) {
      throw new Error(`Component '${answers.componentName}' already exists`);
    }

    // ... rest of actions
    const actions: ActionType[] = [
      {
        type: "add",
        path: `${componentPath}/{{pascalCase componentName}}.tsx`,
        templateFile: "plop/generators/component/index.tsx.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: `${componentPath}/loadable.ts`,
        templateFile: "plop/generators/component/loadable.tsx.hbs",
        abortOnFail: true,
      },
    ];

    return actions;
  },
};
