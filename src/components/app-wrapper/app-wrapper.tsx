/**
 *
 * AppWrapper
 *
 */

import ScrollToTop from "app/components/scroll-to-top/scroll-to-top";
import { APP_DESCRIPTION, APP_NAME } from "app/env/env";
import Home from "app/screens/home/home";
import PageNotFound from "app/screens/page-not-found/page-not-found";
import { Helmet } from "react-helmet-async";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import InjectableWrapper from "../injectable-wrapper/injectable-wrapper";
import { OutletWrapper } from "../outlet-wrapper/outlet-wrapper";

/**
 *
 * Main wrapper for the app, Wraps the Router & Routes.
 *
 */
const AppWrapper: React.FunctionComponent = () => {
  return (
    <InjectableWrapper>
      <BrowserRouter>
        <Helmet titleTemplate={`%s - ${APP_NAME}`} defaultTitle={APP_NAME || ""}>
          <meta name="description" content={APP_DESCRIPTION} />
        </Helmet>
        <ScrollToTop />
        <Routes>
          <Route path="*" element={<PageNotFound />} />

          <Route element={<OutletWrapper />}>
            {/*
             *
             * replace is set true, as default index is Home, and should be back navigate enabled.
             *
             */}
            <Route index element={<Navigate to="home" replace />} />
            <Route path="home" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </InjectableWrapper>
  );
};

export default AppWrapper;
