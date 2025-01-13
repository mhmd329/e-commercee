import './App.css';
import SportCard from './components/cards/sportCard';
import Home from './components/home/Home';
import NavBar from './components/nav/NavBar';

function App() {
  return (
    <div >
      <NavBar/>
      <Home/>
      <SportCard/>
    </div>
  );
}

export default App;
