import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { root as rootReducer } from './reducers/root';
import { rootSaga } from './sagas/root';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}) {
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware),
  );

  sagaMiddleware.run(rootSaga);

  return store;
}