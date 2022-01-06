import React, {Component} from 'react';
import {Button} from "reactstrap";
import { connect } from 'react-redux';
import axios from "axios";

const mapStateToProps=state=>{
    return{
        ingredients: state.ingredients,
        totalPrice: state.totalPrice,
        purchasable: state.purchasable,

    }
}

class Checkout extends Component {
    constructor() {
        super();
        this.state={
            values: {
                deliveryAddress: "",
                phone: "",
                paymentType: "Cash On Delivery",
            }
        }
    }

    goBack = () => {
        this.props.history.goBack("/");
    }

    inputChangerHandler = (e) => {
        this.setState({
            values: {
                ...this.state.values,
                [e.target.name]: e.target.value,
            }
        })
    }

    submitHandler = () => {
        const order={
            ingredients: this.props.ingredients,
            customer:this.state.values,
            price:this.props.totalPrice,
            orderTime: new Date(),
        }

        axios.post("https://burger-builder-9bc86-default-rtdb.firebaseio.com/orders.json",order)
            .then(response=>console.log(response))
            .catch(err=>console.log(err))

    }


    render() {
        return (
            <div className="container mt-5 col-8 offset-2">

                <h4 style={{
                    border: "2px solid navy",
                    boxShadow: "1px 1px navy",
                    borderRadius: "5px",
                    padding: "20px",
                }}>Payment: {this.props.totalPrice} BDT</h4>

                <form  style={{
                    border: "1px solid grey",
                    boxShadow: "1px 1px #888888",
                    borderRadius: "5px",
                    padding: "20px",
                }} >
                   <textarea name="deliveryAddress" value={this.state.values.deliveryAddress} className="form-control" onChange={(e) => this.inputChangerHandler(e)} placeholder="Your Address"></textarea> <br/>
                    <input name="phone" value={this.state.values.phone} className="form-control" onChange={(e) => this.inputChangerHandler(e)} placeholder="Your Phone Number"/> <br/>
                    <select name="paymentType" className="form-control" value={this.state.values.paymentType} onChange={(e) => this.inputChangerHandler(e)}>
                        <option value="Cash On Delivery" >Cash On Delivery</option>
                        <option value="Bkash">Bkash</option>
                    </select> <br />

                    <Button style={{ backgroundColor: "#D70F64" }} className="mr-auto" onClick={this.submitHandler}>Place Order</Button> &nbsp;
                    <Button color="secondary" className="ml-1" onClick={this.goBack}>Cancel</Button>


                </form>
                
            </div>
        );
    }
}

export default connect(mapStateToProps) (Checkout);