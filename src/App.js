import './App.scss';
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';
import Expenses from './components/expenses/Expenses';

function App() {

  return (
    <div className="App">
      <Header />

      <main>
        <section className="expenses">
          <h1>Expenses List</h1>
          <Expenses />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
