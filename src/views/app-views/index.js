import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content"/>}>
      <Switch>
        <Route path={`${APP_PREFIX_PATH}/commons/dashboard`} component={lazy(() => import(`./home`))} />
        <Route path={`${APP_PREFIX_PATH}/commons/planner`} component={lazy(() => import(`./planner`))} />
        <Route path={`${APP_PREFIX_PATH}/commons/clients/list`} component={lazy(() => import(`./users-list`))} />
        <Route path={`${APP_PREFIX_PATH}/commons/clients/settings`} component={lazy(() => import(`./user-settings`))} />
        <Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}/commons/dashboard`} />
      </Switch>
    </Suspense>
  )
}

export default React.memo(AppViews);