import * as ActionTypes from './ActionTypes';

const INGREDIENT_PRICES = {
    salad: 20,
    cheese: 40,
    meat: 90,
}

const INITIAL_STATE={
    ingredients: [
        { type: 'salad', amount: 0 },
        { type: 'cheese', amount: 0 },
        { type: 'meat', amount: 0 },
    ],
    totalPrice: 80,
    purchasable: false,
}

export const Reducer =(state=INITIAL_STATE,action)=>{
    const ingredients =[...state.ingredients];

    switch (action.type){

        case ActionTypes.ADD_INGREDIENT:
            for (let item of ingredients){
                if (item.type===action.payload)
                    item.amount++;
            }
            return {
                ...state,
                ingredients: ingredients,
                totalPrice:state.totalPrice+INGREDIENT_PRICES[action.payload],
            }


        case ActionTypes.REMOVE_INGREDIENT:

            for (let item of ingredients){
                if (item.type===action.payload){
                    if (item.amount<=0){
                        return state
                    }
                    else {
                        item.amount--;
                    }
                }
            }
            return {
                ...state,
                ingredients: ingredients,
                totalPrice: state.totalPrice-INGREDIENT_PRICES[action.payload]
            }

        case ActionTypes.UPDATE_PURCHASABLE:
            const sum=state.ingredients.reduce((sum,element)=>{
                return sum+ element.amount
            },0)
            return {
                ...state,
                purchasable:sum>0,
            }

        default: return state ;
    }

}