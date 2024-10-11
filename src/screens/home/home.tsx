import React, { memo } from "react";
import { HeaderComponent } from "./components/header-component";

/**
 *
 * Home, main landing home page of the application
 *
 */
const Home: React.FunctionComponent = memo(() => {
  return (
    <div className=" h-full w-full flex-col gap-2 overflow-y-auto">
      <HeaderComponent />
    </div>
  );
});

export default Home;
