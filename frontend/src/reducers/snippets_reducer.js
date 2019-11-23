import {
    RECEIVE_SNIPPETS,
    RECEIVE_USER_SNIPPETS,
    RECEIVE_ONE_SNIPPET,
    REMOVE_SNIPPET
} from "../actions/snippet_actions";

const snippetsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState;

    switch (action.type) {
        case RECEIVE_SNIPPETS: //action.snippets is an array
            // debugger
            const snippets = {};
            action.snippets.forEach( snippet => 
                snippets[snippet._id] = snippet);
            return snippets
        case RECEIVE_USER_SNIPPETS:
            newState = {  };
            return Object.assign({}, oldState, newState);
        case RECEIVE_ONE_SNIPPET:
            newState = { [action.snippet.data._id]: action.snippet.data };
            return Object.assign({}, oldState, newState);
        case REMOVE_SNIPPET:
            newState = {  };
            // delete;
            return Object.assign({}, oldState, newState);
        default:
            return oldState;
    }
};

export default snippetsReducer;
