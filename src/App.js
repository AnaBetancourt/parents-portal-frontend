import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import MeetupsContainer from './containers/MeetupsContainer'
import PostsContainer from './containers/PostsContainer'
import { Route } from 'react-router-dom'


function App() {
  return (
    <>                            
      <Route path="/" component={NavBar} />
      <Route exact path="/" component={Home} />
      <Route exact path="/meetups" component={MeetupsContainer} />
      <Route exact path="/forum" component={PostsContainer} />          
    </>
  );
}

export default App;
