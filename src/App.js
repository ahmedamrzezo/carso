import './App.scss';
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';
import Expenses from './components/expenses/Expenses';
import { AddExpense } from './components/expenses/AddExpense/AddExpense';

function App() {

  return (
    <div className="App">
      <Header />

      <main>
        <div className="container mx-auto">
          <section>
            <AddExpense />
            <h1>Expenses List</h1>
            <Expenses />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
