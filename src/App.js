import './App.css';
import Nav from './Components/Nav/Nav'
import Home from './Components/Home/Home'
import Transfer from './Components/Transfer/Transfer'
import {Switch,Route} from 'react-router-dom'

function App() {

  
  return (
    <>
      <Nav />
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/transfer" component={Transfer} />
      </Switch>
      
    </>
  );
}

export default App;
