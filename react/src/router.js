import React from "react"
import {Switch, BrowserRouter, Route} from "react-router-dom"

import App from "./App";
import BorderRadius from "./pages/BorderRadius";
import Calculator from "./pages/Calculator";

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact component={App} path='/'/>
                <Route component={BorderRadius} path='/border-radius'/>
                <Route component={Calculator} path='/calculator'/>
            </Switch>
        </BrowserRouter>
    )
}
