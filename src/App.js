import './App.scss';
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';
import Expenses from './components/expenses/Expenses';

function App() {

  return (
    <div className="App">
      <Header />

      <main>
        <div className="container mx-auto">
          <section>
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
