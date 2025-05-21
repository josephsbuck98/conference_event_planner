import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
    {
      img: "https://images.creativefabrica.com/products/previews/2023/11/02/P13yJ03Xp/2Xcrw6vLj0F4qfEy5LjHGNVmeXb-desktop.jpg",
      name: "Projectors",
      cost: 200,
      quantity: 0,
    }, 
    {
      img: "https://images.creativefabrica.com/products/previews/2024/07/08/4rYqvJbIk/2iy1E8Ky6F6caSSru9mkXAXNHLA-desktop.jpg",
      name: "Speaker",
      cost: 35,
      quantity: 0,
    }, 
    {
      img: "https://www.creativefabrica.com/wp-content/uploads/2021/09/10/Conference-Graphics-17109016-1-1-580x387.jpg",
      name: "Microphones",
      cost: 45,
      quantity: 0,
    }, 
    {
      img: "https://www.creativefabrica.com/wp-content/uploads/2023/08/17/Square-White-Board-in-Wall-Background-Graphics-77102697-1-1-580x387.jpg",
      name: "Whiteboards",
      cost: 80,
      quantity: 0,
    }, 
    {
      img: "https://www.creativefabrica.com/wp-content/uploads/2023/03/09/Subway-Signage-Horizontal-Mockup-Graphics-63723964-1-1-580x387.jpg",
      name: "Signage",
      cost: 80,
      quantity: 0,
    }
  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
      // console.log(JSON.parse(JSON.stringify(state)));

      if (state[action.payload]) {
        state[action.payload].quantity++;
      }
      // if (item) {
      //   item.quantity += 1;
      //   console.log("Quantity Post Increment: ", item.quantity);
      // }
    },
    decrementAvQuantity: (state, action) => {
      const { payload: index } = action;
      const item = state[action.payload];
      if (item && item.quantity > 0) {
        item.quantity -= 1;
      }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
