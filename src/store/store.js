import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import PostsReducer from "./reducers/PostsReducer";
import thunk from "redux-thunk";
import { AuthReducer } from "./reducers/AuthReducer";
import todoReducers from "./reducers/Reducers";
import { ProductReducer } from "./reducers/ProductReducer";
import { CategoryReducer } from "./reducers/CategoryReducer";
import { OrderReducer } from "./reducers/OrderReducer";
import { TableReducer } from "./reducers/TableReducer";
//import { reducer as reduxFormReducer } from 'redux-form';
const middleware = applyMiddleware(thunk);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  posts: PostsReducer,
  auth: AuthReducer,
  todoReducers,
  products: ProductReducer,
  categories: CategoryReducer,
  orders: OrderReducer,
  tables: TableReducer,
  //form: reduxFormReducer,
});

//const store = createStore(rootReducers);

export const store = createStore(reducers, composeEnhancers(middleware));
