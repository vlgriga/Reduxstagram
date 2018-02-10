/* Import React dependecies */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute , browserHistory } from 'react-router';
import store, { history } from './store';

/* Import React components */
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

/* Import CSS */
import css from './styles/style.styl';


const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="/view/:viewID" component={Single}></Route>     
            </Route>
        </Router>
    </Provider>
)

render( router , document.getElementById('root'));