import { allApi } from "app/services/all-api";
import { memo } from "react";
import { addMiddleware } from "redux-dynamic-middlewares";
import { useInjectReducer } from "redux-injectors";
import Spinner from "../spinner/spinner";

export interface InjectableWrapperProps {
  children: React.ReactNode;
}

/**
 *
 * Injectable wrapper, this wrapper ensures that base allApi's reducer and middleware
 * are injected into the store, without this injected, store will not be able to dispatch
 * the api calls and other extra reducer's actions.
 *
 */
const InjectableWrapper: React.FunctionComponent<InjectableWrapperProps> = memo((props: InjectableWrapperProps) => {
  // props
  const { children } = props;

  /**
   *
   * Instead of the traditional approach from the redux toolkit, where we add all the possible middlewares
   * and reducer's to the store, we use the redux-dynamic-middlewares library which allows us to inject middlewares
   * on demand, This is useful for code splitting and large reducers and middlewares
   *
   * Below the allApi's middleware is injected, and all other api middlewares are code splitted, so we can inject them
   * whenever an api all is made.
   *
   */
  const allApiInjected = useInjectReducer({ key: allApi.reducerPath, reducer: allApi.reducer });
  addMiddleware(allApi.middleware);

  // render a loader if allApiInjected is false
  if (!allApiInjected) {
    return (
      <div className="h-screen w-screen items-center justify-center overflow-hidden">
        <Spinner />
      </div>
    );
  }

  return <>{children}</>;
});

export default InjectableWrapper;
