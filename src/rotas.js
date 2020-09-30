import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Login from "./pages/Login"
import Inicio from "./pages/Inicio"


export default function Rotas(){
  return(
<BrowserRouter>
  <Switch>
    <Route exact path="/" component={Inicio} />
    <Route exact path="/login" component={Login} />
  </Switch>
</BrowserRouter>
  )
}