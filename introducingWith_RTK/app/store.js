const { configureStore } = require("@reduxjs/toolkit");
const { createLogger } = require("redux-logger");
const counterReducer = require("../features/counter/counterSlice");
const dynamicCounterReducer = require("../features/dynamicCounter/dynamicCounterSlice");
const postreducer = require("../features/post/postSlice");

const logger = createLogger();

const store = configureStore({
  reducer: {
    counter: counterReducer,
    dynamicCounter: dynamicCounterReducer,
    post: postreducer,
  },
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(logger),
});

module.exports = store;
