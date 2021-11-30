import React from 'react'
import Login from '../views/login'
import RegisterUser from '../views/registerUser'
import Home from '../views/home'
// import RegisterCostumer from '../views/registerCostumer'
import CostumerQuery from '../views/costumerQuery'
import { Route, Switch, HashRouter } from 'react-router-dom'
import RegisterCostumer from '../views/registerCostumer'

function Routes(){
    return(
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/registerUser" component={RegisterUser} />
                <Route path="/home" component={Home} />
                <Route path="/registerCostumer/:id" component={RegisterCostumer} />
                <Route path="/registerCostumer" component={RegisterCostumer} />
                <Route path="/costumerQuery" component={CostumerQuery} />
            </Switch>
        </HashRouter>
    )
}

export default Routes