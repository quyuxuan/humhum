import {createStore,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./modal/index";


let composeEnhancers = compose;
if(process.env.NODE_ENV === "development"){
    composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

export default store;
