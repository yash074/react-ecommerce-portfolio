export const initialState = {
  cartItems: [],
};

export function CartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const item = action.payload;
      const existingItem = state.cartItems.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          ),
        };
      }

      return {
        ...state,
        cartItems: [...state.cartItems, { ...item, quantity: 1 }],
      };
    }

    case "INCREMENT":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };

    case "DECREMENT":
      return {
        ...state,
        cartItems: state.cartItems
          .map((item) =>
            item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
          )
          .filter((item) => item.quantity > 0),
      };

    case "Remove_From_Cart":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };

    case "CLEAR_CART":
      return { ...state, cartItems: [] };

    default:
      return state;
  }
}
