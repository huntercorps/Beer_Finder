import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Index from './components/Index';
import Details from './beerdbapi/Details';
import Provider from './context';
import './App.css';

class App extends Component {
    render() {
        return (
            <Provider>
            <Router>
                <React.Fragment>
                <Navbar/>
                <div className={"container"}>
                    <Switch>
                        <Route exact path={"/"} component={Index}/>
                        <Route exact path={"/details/beer/:id"} component={Details}/>
                    </Switch>
                </div>
                </React.Fragment>
            </Router>
            </Provider>
        );
    }

}

export default App;

// function App() {
//   return (
//     <div className="App">
//       Hello World
//     </div>
//   );
// }
//
// export default App;
