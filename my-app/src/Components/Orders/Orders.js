import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {fetchOrders} from "../../Redux/ActionCreators";
import Order from "./Order/Order";
import {Col, Container, Row} from "react-bootstrap";
import Spinner from "../Spinner/Spinner";


const mapStateToProps=state=>{
    return{
        orders:state.orders,
        orderLoading:state.orderLoading,
        orderErr:state.orderErr,
    }
}


const mapDispatchToProps=dispatch=>{
    return{
        fetchOrders:()=>dispatch(fetchOrders()),
    }
}

class Orders extends Component {
    componentDidMount() {
        this.props.fetchOrders();
    }
    // componentDidUpdate() {
    //     console.log(this.props)
    // }

    render() {

        let order=null;

        if (this.props.orderErr){
            order=<p style={{
                border: "1px solid grey",
                boxShadow: "1px 1px #888888",
                borderRadius: "5px",
                padding: "20px",
                marginBottom: "10px",
            }} >Sorry Failed to Load Orders!</p>
        }
        else {
            if (this.props.orders.length===0){
                order=<p style={{
                    border: "1px solid grey",
                    boxShadow: "1px 1px #888888",
                    borderRadius: "5px",
                    padding: "20px",
                    marginBottom: "10px",
                }} >You have no Orders!</p>
            }
            else{
                order=this.props.orders.map(order=>{
                    return <Order order={order} key={order.id}/>

                })
            }
        }




        return (

                <div className="container mt-5">

                    {this.props.orderLoading?<Spinner />:order}

                </div>


        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Orders);