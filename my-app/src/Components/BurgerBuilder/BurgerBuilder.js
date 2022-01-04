import React, { Component } from 'react';
import Burger from './Burger/Burger';
import Controls from "./Controls/Controls";
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';
import Summary from "./Summary/Summary";
import {connect} from "react-redux";
import {addIngredient,removeIngredient,updatePurchasable} from "../../Redux/ActionCreators";

const mapStateToProps=state=>{
    return{
        ingredients: state.ingredients,
        totalPrice:state.totalPrice,
        purchasable:state.purchasable,
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        addIngredient: (igtype) => dispatch(addIngredient(igtype)),
        removeIngredient: (igtype) => dispatch(removeIngredient(igtype)),
        updatePurchasable: () => dispatch(updatePurchasable()),
    }

}


class BurgerBuilder extends Component {
    state = {
        modalOpen: false,
    }

    // updatePurchasable = ingredients => {
    //     const sum = ingredients.reduce((sum, element) => {
    //         return sum + element.amount;
    //     }, 0);
    //     this.setState({ purchasable: sum > 0 })
    // }


    addIngredientHandle=type=>{
       this.props.addIngredient(type);

    }

    removeIngredientHandle=type=>{
        const ingredients =[...this.state.ingredients];
        const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
        for (let item of ingredients){
            if (item.type===type){
                if (item.amount<=0){
                    return item
                }
                else {
                     item.amount--;
                }
            }
        }
        this.setState({
            ingredients:ingredients,
            totalPrice: newPrice
        })
        this.updatePurchasable(ingredients);
    }

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    handleCheckout=()=>{
        this.props.history.push("/Checkout")
    }

    render() {
        return (
            <div>
                <div className="d-flex flex-md-row flex-column container" style={{marginTop:"20px"}}>
                    <Burger ingredients={this.props.ingredients} />
                    <Controls
                        ingredientAdded={this.addIngredientHandle}
                        ingredientRemoved={this.removeIngredientHandle}
                        price={this.props.totalPrice}
                        toggleModal={this.toggleModal}
                        purchasable={this.props.purchasable}

                    />
                </div>

                <Modal isOpen={this.state.modalOpen}>
                    <ModalHeader>Your Order Summary</ModalHeader>
                    <ModalBody>
                        <h5>Total Price: {this.props.totalPrice.toFixed(0)} BDT</h5>
                        <Summary ingredients={this.props.ingredients} />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={this.handleCheckout}>Continue to Checkout</Button>
                        <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>

            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps )(BurgerBuilder);