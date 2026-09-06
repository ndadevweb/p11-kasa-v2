import './App.css';
import { Outlet } from 'react-router';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <div className="container">
        <Header />

        <main>
          <Outlet />
        </main>
      </div>

      <Footer />
    </>
  );
}

export default App;
