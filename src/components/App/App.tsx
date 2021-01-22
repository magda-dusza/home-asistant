import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Provider } from 'react-redux';
import { ThemeProvider, withTheme } from 'emotion-theming'

import { ROUTES } from '../../consts/routing';
import { Loading } from '../../commons/Loading/Loading';
import { store } from '../../store';
import { theme } from '../../consts/theme';

import { AppHeader, AppStyled } from './styles';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppStyled>
          <AppHeader>
            Test
          </AppHeader>
          <Router>
            <Suspense fallback={<Loading />}>
              <Switch>
                <Redirect
                  exact
                  path={ROUTES.HOME.path}
                  to={ROUTES.HOME.path}
                />
                {Object.values(ROUTES).map(({ label, path, Component }) => (
                  <Route path={path} key={label}>
                    <Component />
                  </Route>))}
              </Switch>
            </Suspense>
          </Router>

        </AppStyled>
      </ThemeProvider>
    </Provider>
  );
}

export default withTheme(App);
