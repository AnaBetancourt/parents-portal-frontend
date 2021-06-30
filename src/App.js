import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
// import MeetupsContainer from './containers/MeetupsContainer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      {/* <MeetupsContainer /> */}
    </div>
  );
}

export default App;
