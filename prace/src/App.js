import logo from './logo.svg';
import './App.css';
import AppHeader from './components/header';
import AppGeografie from './components/Geografie';
import AppAllies from './components/Allies';
import AppTaipei from './components/Taipei';
import AppWar from './components/War';

function App() {
  return (
    <div className='App1'>
      <AppHeader></AppHeader>
      <AppGeografie></AppGeografie>
      <AppAllies></AppAllies>
      <AppWar></AppWar>
      <AppTaipei></AppTaipei>
      
    
    </div>
    
  );
}

export default App;
