import { createStore, compose} from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';


// import reducer
import rootReducer from './reducers/index';

// import posts and comments
import comments from './data/comments';
import posts from './data/posts';

// default data
const defaultState = {
    posts, 
    comments
};


const store = createStore(rootReducer , defaultState);
export const history = syncHistoryWithStore( browserHistory, store);

export default store;