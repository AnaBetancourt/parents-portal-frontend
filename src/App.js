import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import { Route } from 'react-router-dom'


function App() {
  return (
    <>                            
      <Route path="/" component={NavBar} />
      <Route exact path="/" component={Home} />          
    </>
  );
}

export default App;
