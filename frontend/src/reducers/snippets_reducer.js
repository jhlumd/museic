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
        case RECEIVE_SNIPPETS:
            newState = {  };
            return Object.assign({}, oldState, newState);
        case RECEIVE_USER_SNIPPETS:
            newState = {  };
            return Object.assign({}, oldState, newState);
        case RECEIVE_ONE_SNIPPET:
            newState = { [action.snippet.data._id]: action.snippet.data };
            // debugger;
            return Object.assign({}, oldState, newState);
        case REMOVE_SNIPPET:
            // delete;
            return Object.assign({}, oldState, newState);
        default:
            return oldState;
    }
};

export default snippetsReducer;
