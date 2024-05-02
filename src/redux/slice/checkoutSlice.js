const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
  shippingAddress: {},
  billingAddress: {}
}

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    SAVE_SHIPPING_ADDRESS: (state, action) => {
      state.shippingAddress = action.payload;
    },
    SAVE_BILLING_ADDRESS: (state, action) => {
      state.billingAddress = action.payload;
    },
  }
})

export const { SAVE_SHIPPING_ADDRESS, SAVE_BILLING_ADDRESS } = checkoutSlice.actions;

export const selectShippingAddress = (state) => state.checkout.shippingAddress;
export const selectBillingAddress = (state) => state.checkout.billingAddress;

export default checkoutSlice.reducer;