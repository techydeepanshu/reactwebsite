
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Search from './components/Search';
// import "./App.css";
import { Route , Switch} from "react-router-dom";
import Contact from './components/Contact';
import Services from './components/Services';
import About from './components/About';
import Home from './components/Home';
import Navbar from './navBar/Navbar';

function App() {
  return (
    <>
      <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/services" component={Services}/>
        </Switch>
    </>
  );
}

export default App;
