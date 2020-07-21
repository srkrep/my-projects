import React, {Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route,  } from 'react-router-dom';
import Home from './components/Home';
import Conversion from './components/Conversion';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
     <Fragment>
       <div className="container justify-content-center">
         <div className="row">
           <h2 className="title">Currency Converter API</h2>
         </div>
       </div>
        <Router>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/conversion" component={Conversion}/>
              <Route path="*" component={PageNotFound}/>
            </Switch>
        </Router>
        <svg viewBox="0 0 1440 240"><path fill="#0099ff" fillOpacity="1" d="M0,224L80,197.3C160,171,320,117,480,122.7C640,128,800,192,960,186.7C1120,181,1280,107,1360,69.3L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
     </Fragment>
  );
}

export default App;
