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

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <div className="App">
      <Header />

      <Main>
        <Switch>
          <Redirect path="/" to="/dashboard" exact />

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

          <Route path="/dashboard" component={Dashboard} />

          <Route path="/expenses" component={Expenses} />
        </Switch>
      </Main>

      <Footer />
    </div>
  );
}

export default App;
