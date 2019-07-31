import { createStore, reducer,action } from 'easy-peasy';  // 👈 import from easy peasy
import { reducer as formReducer } from 'redux-form';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import {
    adminReducer,
    adminSaga,
    defaultI18nProvider,
    i18nReducer,
    formMiddleware,
    USER_LOGOUT,
} from 'react-admin';

export default ({
    authProvider,
    dataProvider,
    i18nProvider = defaultI18nProvider,
    history,
    locale = 'pt',
}) => { 

    const model = {
        admin: reducer(adminReducer),
        i18n: reducer(i18nReducer(locale, i18nProvider(locale))),
        form: reducer(formReducer),
        router: reducer(routerReducer),
        resettableAppReducer:(state, action) => reducer(action.type !== USER_LOGOUT ? state : undefined, action),
    
        // We can then add any Easy Peasy models we like too
        victory: {
            msg: 'Easy Peasy + Redux harmony ❤️',
            updateMsg: action((state, payload) => {
                state.msg = payload;
            })
        }
    };


    const saga = function* rootSaga() {
        yield all(
            [
                adminSaga(dataProvider, authProvider, i18nProvider),
                // add your own sagas here
            ].map(fork)
        );
    };
    
    const sagaMiddleware = createSagaMiddleware();   
    let storeEnhancers = [];

    if (process.env.NODE_ENV==='development') {
        const reactotron = require("./components/ReactotronConfig").default;
        reactotron.initiate();
        storeEnhancers = [...storeEnhancers, reactotron.createEnhancer()];
      }

    const store = createStore(model, {
        middleware: [sagaMiddleware,formMiddleware,routerMiddleware(history)],
        enhancers: storeEnhancers
    });
    sagaMiddleware.run(saga);

    return store;
}