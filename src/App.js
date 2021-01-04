import React from "react";
import {Switch, Route} from 'react-router-dom'
import {Home} from "./pages/Home"
import {About} from "./pages/About";
import {Navbar} from "./components/Navbar";
import {Alert} from "./components/Alert";
import {AlertState} from "./context/alert/AlertState";
import {FirebaseState} from "./context/firebase/FirebaseState";

const App = () => {
    return (
        <FirebaseState>
            <AlertState>
                <Navbar/>
                <div className="container pt-4">
                    <Alert/>
                    <Switch>
                        <Route path='/' exact render={() => <Home/>}/>
                        <Route path='/about' render={() => <About/>}/>
                    </Switch>
                </div>
            </AlertState>
        </FirebaseState>
    )
}

export default App;
