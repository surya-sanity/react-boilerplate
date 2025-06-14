import type { PlopGeneratorConfig, ActionType } from 'plop';
import type { Question } from 'inquirer';
import inquirer from 'inquirer';
import inquirerDirectory from 'inquirer-directory';
import path from 'path';
import { baseGeneratorPath, pathExists, toKebabCase } from '../../utils.ts';

inquirer.registerPrompt('directory', inquirerDirectory);

type DirectoryQuestion = Question & {
  basePath: string;
};

interface ComponentAnswers {
  componentName: string;
  path: string;
  wantMemo: boolean;
  wrapFolder: boolean;
}

export const componentGenerator: PlopGeneratorConfig = {
  description: 'Add a new React component',

  prompts: [
    {
      type: 'input',
      name: 'componentName',
      message: 'What should it be called? (PascalCase, e.g., TodoList)',
      validate: (input: string) => {
        if (!/^[A-Z][A-Za-z0-9]+$/.test(input)) {
          return 'Component name must be in PascalCase.';
        }
        return true;
      },
    },

    {
      type: 'directory',
      name: 'path',
      message: 'Where do you want it to be created?',
      basePath: baseGeneratorPath,
    } as DirectoryQuestion,
    {
      type: 'confirm',
      name: 'wantMemo',
      default: false,
      message: 'Do you want to wrap your component in React.memo?',
    },
    {
      type: 'confirm',
      name: 'wrapFolder',
      default: true,
      message: 'Do you want to create the component inside its own folder?',
    },
  ],
  actions: (data) => {
    const answers = data as ComponentAnswers;

    const componentFolder = answers.wrapFolder ? toKebabCase(answers.componentName) : '';

    const componentPath = path.join(baseGeneratorPath, answers.path, componentFolder);
    const actualComponentPath = path.join(componentPath, `${answers.componentName}.tsx`);

    if (pathExists(actualComponentPath)) {
      throw new Error(`Component '${answers.componentName}' already exists`);
    }

    const actions: ActionType[] = [
      {
        type: 'add',
        path: `${componentPath}/{{pascalCase componentName}}.tsx`,
        templateFile: 'plop/generators/component/index.tsx.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${componentPath}/loadable.ts`,
        templateFile: 'plop/generators/component/loadable.tsx.hbs',
        abortOnFail: true,
      },
    ];

    return actions;
  },
};
