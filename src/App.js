import './App.css';
import CardDisplay from './Components/CardDisplay';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <CardDisplay />
      <Footer />
    </div>
  );
}

export default App;
