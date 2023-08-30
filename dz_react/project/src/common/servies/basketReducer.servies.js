import { initialData } from "../../App";

export const ADD = "add";
export const DECREMENT = "decrement";
export const REMOVE = "remove";
export const REMOVE_ALL = "removeAll";

const basketReducer = (state, action) => {

    switch (action.type) {
        case ADD: {
            let basketItem = state.basketItems.find(
                (basketItem) => basketItem.id === action.payload.id
            );
            let basketItems;
  
            if (basketItem) {
                basketItem.amount += 1;
                basketItems = [...state.basketItems];
            } else {
                basketItem = { amount: 1, ...action.payload };
                basketItems = [...state.basketItems, basketItem];
            }
  
            return {
                ...state,
                basketCounter: state.basketCounter + 1,
                totalPriceBasketItems: state.totalPriceBasketItems + basketItem.price,
                basketItems,
            };
        }
  
        case REMOVE: {
            const removeItem = state.basketItems.find((item) => item.id === action.payload.id);
  
            if (removeItem) {
                const updatedBasketItems = state.basketItems.filter((item) => item.id !== action.payload.id);
  
                return {
                    ...state,
                    basketCounter: state.basketCounter - removeItem.amount,
                    totalPriceBasketItems: state.totalPriceBasketItems - (removeItem.price * removeItem.amount),
                    basketItems: updatedBasketItems,
                };
            }
        }
  
        case DECREMENT: {
            const updatedBasketItems = state.basketItems.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        amount: item.amount - 1
                    };
                }
                return item;
            });
            
            return {
                ...state,
                basketCounter: state.basketCounter - 1,
                totalPriceBasketItems: state.totalPriceBasketItems - action.payload.price,
                basketItems: updatedBasketItems
            };
        }
        
        case REMOVE_ALL: {
            return {
                ...initialData
            }
        } 

        default: {
            return { ...state }; 
        }
    }
};

export default basketReducer;
