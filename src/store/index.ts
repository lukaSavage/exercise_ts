import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const store = createStore(reducers,
    process.env.NODE_ENV === 'development' ? composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)
);

// 呵呵额
export default store;