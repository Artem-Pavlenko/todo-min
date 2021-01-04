import React from "react";
import {Switch, Route} from 'react-router-dom'
import {Home} from "./pages/Home"
import {About} from "./pages/About";

const App = () => {
    return (
        <div className="container pt-4">
            <Switch>

                <Route path='/home' exact render={() => <Home/>}/>
                <Route path='/about' exact render={() => <About/>}/>

            </Switch>
        </div>
    )
}

export default App;
