import { combineReducers } from 'redux';

const clientsData = [];

const clientsReducer = (state = clientsData, action) => {
    switch(action.type) {
        case 'UPLOAD_CLIENTS': {
            let arr = action.payload;
        
            for(let i = 0; i < arr.length; i++) {
                arr[i].opened = false;
            }
            return arr;
        }

        default: return state
    }

};

const searchReducer = (state = '', action) => {
    if (action.type === 'SEARCH') {
        return action.payload;
    }
    return state;
};


const rootReducer = combineReducers({
    clientsState: clientsReducer,
    searchState: searchReducer
});

export default rootReducer;