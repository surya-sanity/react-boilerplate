import { LoadingState } from "app/components/loading-state/loading-state";
import React, { lazy, Suspense } from "react";

/**
 * A higher-order function to lazy-load components with a Suspense fallback.
 * This simplifies code-splitting and handles both default and named exports.
 *
 * @param factory A function that returns a dynamic import, e.g., () => import('./MyComponent')
 * @param selector An optional function to select a named export from the module, e.g., (module) => module.MyComponent
 * @returns A new React component that can be rendered directly.
 */
export const lazyLoad = <T extends React.ComponentType<any>>(
  factory: () => Promise<{ [key: string]: T }>,
  selector?: (module: { [key: string]: T }) => T
) => {
  const LazyComponent = lazy(() =>
    factory().then((module) => {
      const Component = selector ? selector(module) : module.default;
      return { default: Component };
    })
  );

  return (props: React.ComponentProps<T>) => (
    <Suspense fallback={<LoadingState />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};
