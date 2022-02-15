import * as ActionTypes from "./ActionTypes";
import axios from "axios";

export const addIngredient =igtype=>{
    return{
        type:ActionTypes.ADD_INGREDIENT,
        payload:igtype,
    }
}

export const removeIngredient=igtype=>{
    return{
        type:ActionTypes.REMOVE_INGREDIENT,
        payload:igtype,
    }
}

export const updatePurchasable = () => {
    return {
        type: ActionTypes.UPDATE_PURCHASABLE,
    }
}


export const resetIngredients = () => {
    return {
        type: ActionTypes.RESET_INGREDIENTS,
    }
}

export const loadOrders=orders=>{
    return {
        type:ActionTypes.LOAD_ORDERS,
        payload:orders
    }
}

export const orderLoadFailed=()=>{
    return{
        type:ActionTypes.ORDER_LOAD_FAILED
    }
}

export const fetchOrders=(token,userId)=>dispatch=>{
    let url = process.env.REACT_APP_BACKEND_URL;
    
    axios.get(`${url}/order`, { headers: { "Authorization": `Bearer ${token}` } } )
        .then(response=>{
            dispatch(loadOrders(response.data))
        })
        .catch(err=>{
            dispatch(orderLoadFailed())
        })
}




// orders.json












