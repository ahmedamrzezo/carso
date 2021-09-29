import './App.scss';
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';
import Login from './components/auth/login/login';
import AuthContext from './store/auth-context';
import { useContext, Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Main from './layout/main/Main';
import Register from './components/auth/register/register';
import Spinner from './components/shared/ui/spinner/Spinner';
import { CategoriesContextProvider } from './store/categories-context';
import Home from './components/home/Home';

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <div className="App">
      <Suspense fallback={<Spinner />}>
        <Header />
      </Suspense>

      <Main>
        <Suspense fallback={<Spinner />}>
          <Switch>

            <Route path="/" component={Home} exact />

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

            <CategoriesContextProvider>

              <Route path="/dashboard" component={lazy(() => import('./components/dashboard/Dashboard'))} />

              <Route path="/expenses" component={lazy(() => import('./components/expenses/Expenses'))} />

              <Route path="/profile" component={lazy(() => import('./components/profile/Profile'))} />

            </CategoriesContextProvider>

            <Route path="*" >
              Not Found
            </Route>

          </Switch>
        </Suspense>
      </Main>

      <Footer />
    </div>
  );
}

export default App;
