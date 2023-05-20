import { applyMiddleware, createStore } from "redux";
import myLogger from "./middleware/myLogger";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, applyMiddleware(myLogger));

export default store;
