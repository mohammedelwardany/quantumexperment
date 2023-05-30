
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";



import UserSlice from "./UserSlice";



const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//  const store = createStore(reducers,enhancer(applyMiddleware(reduxThunk)))

const store = configureStore({
    reducer:{
        user : UserSlice,

    },
    
})
export default store;
