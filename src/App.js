import Navigation from './component/Navigation';
import './App.css';
import Player from './component/Players';
import Footer from './component/Footer';
import Main from './component/Main';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Player/>
      <Footer />
    </div>
  );
}

export default App;
