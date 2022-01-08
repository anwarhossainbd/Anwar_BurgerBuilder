import React, {Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Card, CardBody} from "reactstrap";

const Order = (props) => {

    const ingredientSummary = props.order.ingredients.map(item => {
        return (
            <span style={{
                border: "1px solid grey",
                borderRadius: "5px",
                padding: "5px",
                marginRight: "10px",
            }} key={item.type}>{item.amount}x <span style={{ textTransform: "capitalize" }}>{item.type}</span></span>
        )
    })

    return (
        <div className="container col-lg-8 col-sm-12" style={{
            border: "1px solid grey",
            boxShadow: "1px 1px #888888",
            borderRadius: "5px",
            padding: "20px",
            marginBottom: "10px",

        }}>
            <p>Order Number: {props.order.id}</p>
            <p>Delivery Address: {props.order.customer.deliveryAddress}</p>
            <hr />
            {ingredientSummary}
            <hr />
            <p>Total: {props.order.price} BDT</p>
        </div>


    );
};

export default Order;