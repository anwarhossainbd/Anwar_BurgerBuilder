import React, {Component} from 'react';
import {Button, Modal, ModalBody} from "reactstrap";
import { connect } from 'react-redux';
import axios from "axios";
import Spinner from "../../Spinner/Spinner";
import {resetIngredients} from "../../../Redux/ActionCreators"

const mapStateToProps=state=>{
    return{
        ingredients: state.ingredients,
        totalPrice: state.totalPrice,
        purchasable: state.purchasable,
        userId:state.userId,
        token:state.token,

    }
}

const mapDispatchToProps=dispatch=>{
   return{
       resetIngredients:()=>dispatch(resetIngredients()),
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
            },
            isLoading:false,
            isModalOpen: false,
            ModalMessage:""
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

        this.setState({
            isLoading:true,
        })

        const order={
            ingredients: this.props.ingredients,
            customer:this.state.values,
            price:this.props.totalPrice,
            orderTime: new Date(),
            userId:this.props.userId,

        }

        axios.post("https://burger-builder-9bc86-default-rtdb.firebaseio.com/orders.json?auth="+this.props.token,order)
            .then(response=>{
                if (response.status ===200){
                    this.setState({
                        isLoading:false,
                        isModalOpen:true,
                        ModalMessage:"Order Placed Successfully!"
                    })
                    this.props.resetIngredients();
                }
                else {
                    this.setState({
                        isLoading:false,
                        isModalOpen:true,
                        ModalMessage:"Something Went Wrong! Order Again!"
                    })
                }
                }
            )
            .catch(err=>{
                this.setState({
                    isLoading:false,
                    isModalOpen:true,
                    ModalMessage:"Something Went Wrong! Order Again!"
                })
            })

    }


    render() {
        return (
            <div>
                {this.state.isLoading? <Spinner />:  <div className="container mt-5 col-8 offset-2">

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

                        <Button style={{ backgroundColor: "#D70F64" }} className="mr-auto" disabled={!this.props.purchasable} onClick={this.submitHandler}>Place Order</Button> &nbsp;
                        <Button color="secondary" className="ml-1" onClick={this.goBack}>Cancel</Button>


                    </form>

                </div>}

                <Modal isOpen={this.state.isModalOpen} onClick={this.goBack}>
                    <ModalBody>
                        <p>{this.state.ModalMessage}</p>
                    </ModalBody>
                </Modal>

            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Checkout);