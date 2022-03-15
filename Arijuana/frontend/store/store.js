import { applyMiddleware, createStore } from "redux"
import rootReducer from "../reducers/root_reducer"
import thunk from "../thunk/thunk";

const configureStore = (preloadedState = {}) => {
    return createStore(rootReducer, preloadedState, applyMiddleware(thunk))
}

export default configureStore;