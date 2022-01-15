import React, {Component} from 'react';
import Header from "./Header/Header";
import {Redirect, Route, Switch} from "react-router-dom";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";
import Orders from "./Orders/Orders";
import Checkout from "./Orders/Checkout/Checkout";
import Auth from "./Auth/Auth";
import { connect } from 'react-redux';
import {authCheck} from "../Redux/AuthActionCreators";
import Logout from "./Auth/Logout";


const mapStateToProps = state => {
    return {
        token: state.token,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        authCheck: () => dispatch(authCheck()),
    }
}


class Main extends Component  {

    componentDidMount() {
        this.props.authCheck();
    }

    render() {
        let routes = null;
        if (this.props.token === null) {
            routes = (
                <Switch>
                    <Route path="/login" exact component={Auth} />
                    <Redirect to="/login" />
                </Switch>
            )}
        else {
            routes=(
                <Switch>
                    <Route path="/orders" component={Orders} />
                    <Route path="/Checkout" component={Checkout} />
                    <Route path="/logout" component={Logout} />
                    <Route path="/" exact component={BurgerBuilder} />
                    <Redirect to="/" />


                </Switch>
            )
        }

        return (
            <div>
                <Header />
                {routes}
            </div>
        );
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Main);