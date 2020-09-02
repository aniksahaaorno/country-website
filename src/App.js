import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import CountryDetails from './Components/CountryDetails/CountryDetails';


function App() {
  return (

         <Router>
           <Switch>

               <Route exact path="/">
                   <Home/>
               </Route>

               <Route path="/country/:countryName">
                   <CountryDetails/>
               </Route>

               <Route path="*">
                   <NotFound/>
               </Route>



           </Switch>
         </Router>
  );
}

export default App;
