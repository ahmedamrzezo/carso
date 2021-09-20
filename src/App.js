import './App.scss';
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';
import Login from './components/auth/login/login';
import AuthContext from './store/auth-context';
import React, { useContext, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Main from './layout/main/Main';
import Register from './components/auth/register/register';
import Spinner from './components/shared/ui/spinner/Spinner';
import { CategoriesContextProvider } from './store/categories-context';

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <div className="App">
      <Header />

      <Main>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Redirect path="/" to="/dashboard" exact />

            <CategoriesContextProvider>

              <Route path="/dashboard" component={React.lazy(() => import('./components/dashboard/Dashboard'))} />

              <Route path="/expenses" component={React.lazy(() => import('./components/expenses/Expenses'))} />

              <Route path="/profile" component={React.lazy(() => import('./components/profile/Profile'))} />

            </CategoriesContextProvider>

            <Route path="/login">
              {
                !authCtx.isLogged &&
                <Login />
              }
              {
                authCtx.isLogged &&
                <Redirect to="/dashboard" />
              }
            </Route>

            <Route path="/register">
              {
                !authCtx.isLogged &&
                <Register />
              }
              {
                authCtx.isLogged &&
                <Redirect to="/dashboard" />
              }
            </Route>

            <Route path="/404">
              Not Found
            </Route>

            <Redirect path="*" to="/404" />
          </Switch>
        </Suspense>
      </Main>

      <Footer />
    </div>
  );
}

export default App;
