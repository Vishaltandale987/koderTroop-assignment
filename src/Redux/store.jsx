import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";

import { searchreducer } from "./reducer.search";


const rootReducer=combineReducers({

  SearchMangerdata:searchreducer

 
})


const createComposer=window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose

export const store = legacy_createStore(rootReducer,createComposer(applyMiddleware(thunk)));