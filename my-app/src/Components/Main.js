import React from 'react';
import Header from "./Header/Header";
import {Route, Switch} from "react-router-dom";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";
import Orders from "./Orders/Orders";
import Checkout from "./Orders/Checkout/Checkout";

const Main = (props) => {
    return (
        <div>
            <Header />

            <Switch>
                <Route path="/orders" component={Orders} />
                <Route path="/Checkout" component={Checkout} />
                <Route path="/" exact component={BurgerBuilder} />
            </Switch>
        </div>
    );
};

export default Main;