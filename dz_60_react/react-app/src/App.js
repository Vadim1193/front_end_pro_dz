import HeaderComp from './components/header/header';
import MainComp from './components/main/main';
import Navigation from './components/navigation/navigation';

function App() {
  return (
    <div className="App">
      <HeaderComp />
      <Navigation />
      <MainComp />
    </div>
  )
}

export default App;
