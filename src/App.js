import './App.scss';
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';
import Expenses from './components/expenses/Expenses';
import Login from './components/auth/login/login';
import AuthContext from './store/auth-context';
import { useContext } from 'react';

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <div className="App">
      <Header />

      {
        !authCtx.isLogged &&
        <Login />
      }
      <main className="container mx-auto">

        <Expenses />

      </main>

      <Footer />
    </div>
  );
}

export default App;
