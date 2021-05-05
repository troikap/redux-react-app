import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from '../reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const userPersistConfig = {
  key: 'user',
  storage,
}

const rootReducer = combineReducers({
  ...reducers,
  user: persistReducer(userPersistConfig, reducers.user)
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);