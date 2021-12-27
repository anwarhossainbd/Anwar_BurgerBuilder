import React from 'react';
import Header from "./Header/Header";
import {Route, Switch} from "react-router-dom";
import c1 from "./c1";
import c2 from "./c2";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";

const Main = (props) => {
    return (
        <div>
            <Header />
            <BurgerBuilder />
            <Switch>
                <Route path="/orders" component={c1} />
                <Route path="/" component={c2} />
            </Switch>
        </div>
    );
};

export default Main;