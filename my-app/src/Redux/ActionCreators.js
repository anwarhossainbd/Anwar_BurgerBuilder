import * as ActionTypes from "./ActionTypes";

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



