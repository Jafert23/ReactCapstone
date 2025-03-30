import './App.css';
import Header from './includes/scripts/Header.js';
import Main from './includes/scripts/Main.js';
import Footer from './includes/scripts/Footer.js';  

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
