import { RECEIVE_NEW_SNIPPET } from "../actions/snippet_actions";

const snippetsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState;

    switch (action.type) {
        case RECEIVE_NEW_SNIPPET:
            newState = { [action.snippet.id]: action.snippet };
            return Object.assign({}, oldState, newState);
        default:
            return oldState;
    }
};

export default snippetsReducer;
