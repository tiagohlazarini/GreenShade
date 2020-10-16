import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Login from "./pages/Login"
import Inicio from "./pages/Inicio"
import NaoEncontrado from "./pages/NaoEncontrado"
import MenuInicial from './pages/MenuInicial'
import RotasPrivadas from './rotasPrivadas'


export default function Rotas(){
  return(
<BrowserRouter>
  <Switch>
    <Route exact path={process.env.PUBLIC_URL + '/'} component={Inicio} />
    <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
    <RotasPrivadas exact path={process.env.PUBLIC_URL + '/menu'} component={MenuInicial} />
    <Route component={NaoEncontrado} />
  </Switch>
</BrowserRouter>
  )
}