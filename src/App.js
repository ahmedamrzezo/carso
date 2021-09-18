import './App.scss';
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';
import Expenses from './components/expenses/Expenses';
import Login from './components/auth/login/login';
import AuthContext from './store/auth-context';
import { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Main from './layout/main/Main';
import Dashboard from './components/dashboard/Dashboard';
import Register from './components/auth/register/register';
import Profile from './components/profile/Profile';
import { CategoriesContextProvider } from './store/categories-context';

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <div className="App">
      <Header />

      <Main>
        <Switch>
          <Redirect path="/" to="/dashboard" exact />

          <CategoriesContextProvider>

            <Route path="/dashboard" component={Dashboard} />

            <Route path="/expenses" component={Expenses} />

            <Route path="/profile" component={Profile} />

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
      </Main>

      <Footer />
    </div>
  );
}

export default App;
