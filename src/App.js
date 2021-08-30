import './App.css';
import Home from "./Components/Home";
import Favourites from "./Components/Favourites";
import {BrowserRouter, Route} from "react-router-dom";
import ViewMore from './Components/ViewMore';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path="/" component={Home}/>
      <Route exact path="/viewmore/:id" component={ViewMore}/>
      <Route exact path="/favourites" component={Favourites}/>
      </BrowserRouter>
      </div>
  );
}

export default App;
