const { createSlice } = require("@reduxjs/toolkit");

// Initial State Define
const initialState = {
  count: 0,
};

const dynamicCounterSlice = createSlice({
  name: "dynamicCounter",
  initialState,
  reducers: {
    dynamicIncrement: (state, action) => {
      state.count += action.payload;
    },
    dynamicDecrement: (state, action) => {
      state.count -= action.payload;
    },
  },
});

module.exports = dynamicCounterSlice.reducer;
module.exports.dynamicCounterActions = dynamicCounterSlice.actions;
