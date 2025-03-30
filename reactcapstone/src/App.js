import './includes/styles/App.css';
import Header from './includes/pages/Header.js';
import Main from './includes/pages/Main.js';
import Footer from './includes/pages/Footer.js';  

function App() {
  return (
    <div className="App">
      <header>
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
