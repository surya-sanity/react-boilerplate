import type { PlopGeneratorConfig, ActionType } from 'plop';
import { baseGeneratorPath } from '../../utils.ts';

export const sliceGenerator: PlopGeneratorConfig = {
  description: 'Add a Redux Toolkit Slice',
  prompts: [
    {
      type: 'input',
      name: 'sliceName',
      message: 'What is the name of the slice? (camelCase, e.g., userProfile)',
    },
  ],
  actions: () => {
    const actions: ActionType[] = [
      {
        type: 'add',
        // Example path: src/app/features/userProfile/slice.ts
        path: `${baseGeneratorPath}/features/{{camelCase sliceName}}/slice.ts`,
        templateFile: 'plop/generators/slice/slice.ts.hbs',
        abortOnFail: true,
      },
    ];
    return actions;
  },
};
