import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import ColorPiker from "./components/Home/ColorPiker/ColorPiker";
import DargNDrop from "./components/Home/DargNDrop/DargNDrop";
import DetailsCard from "./components/Home/DetailsCard/DetailsCard";
import Home from "./components/Home/Home";
import Navbar from "./components/Home/Navbar";
import Spinning from "./components/Home/Spinning/Spinning";

function App() {
  return (
    <div className="App">
     <Router>
       <Navbar/>
       <Switch>
         <Route exact path='/'>
           <Home/>
         </Route>
         <Route  path='/home'>
           <Home/>
         </Route>
         <Route  path='/draggable'>
           <DargNDrop/>
         </Route>
         <Route  path='/details'>
           <DetailsCard/>
         </Route>
         <Route  path='/colorPicker'>
           <ColorPiker/>
         </Route>
         <Route  path='/spinning'>
           <Spinning/>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
