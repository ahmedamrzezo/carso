// import logo from './logo.svg';
import './App.scss';
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';
import ExpenseItem from './components/expenses/expense-item/ExpenseItem';

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <ExpenseItem />
      </main>

      <Footer />
    </div>
  );
}

export default App;
