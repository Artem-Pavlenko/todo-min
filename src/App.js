import React from "react";
import {Switch, Route} from 'react-router-dom'
import {Home} from "./pages/Home"
import {About} from "./pages/About";
import {Navbar} from "./components/Navbar";

const App = () => {
    return (
        <>
            <Navbar/>
            <div className="container pt-4">
                <Switch>
                    <Route path='/' exact render={() => <Home/>}/>
                    <Route path='/about' render={() => <About/>}/>
                </Switch>
            </div>
        </>
    )
}

export default App;
