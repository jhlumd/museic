import * as ApiUtil from "../util/snippet_api_util";
import { getSnippetOwner } from "../util/session_api_util";

export const RECEIVE_SNIPPETS = "RECEIVE_SNIPPETS";
export const RECEIVE_USER_SNIPPETS = "RECEIVE_USER_SNIPPETS";
export const RECEIVE_ONE_SNIPPET = "RECEIVE_ONE_SNIPPET";
export const REMOVE_SNIPPET = 'REMOVE_SNIPPET';

export const RECEIVE_SNIPPET_OWNER = 'RECEIVE_SNIPPET_OWNER'

export const receiveSnippets = snippets => ({ //return array
    type: RECEIVE_SNIPPETS,
    snippets
});

export const receiveUserSnippets = snippets => ({ 
    type: RECEIVE_USER_SNIPPETS,
    snippets
});

export const receiveSnippet = snippet => ({
    type: RECEIVE_ONE_SNIPPET,
    snippet
});

export const removeSnippet = snippet => ({
    type: REMOVE_SNIPPET,
    snippet
});

export const receiveOwnerUsername = (owner, snippetId) => ({
    type: RECEIVE_SNIPPET_OWNER,
    owner,
    snippetId
})

export const fetchSnippets = () => dispatch => (
    ApiUtil.getSnippets()
        .then(res => dispatch(receiveSnippets(res.data)))
        .catch(err => console.log(err))
);

export const fetchUserSnippets = userId => dispatch => (
    ApiUtil.getUserSnippets(userId)
        .then(snippets => dispatch(receiveUserSnippets(snippets)))
        .catch(err => console.log(err))
);

export const fetchSnippet = snippetId => dispatch => (
    ApiUtil.getSnippet(snippetId)
        .then(snippet => dispatch(receiveSnippet(snippet)))
);

export const saveSnippet = formData => dispatch => (
    ApiUtil.saveSnippet(formData)
        .then(snippet => dispatch(receiveSnippet(snippet)))
        .catch(err => console.log(err))
);

export const deleteSnippet = snippetId => dispatch => (
    ApiUtil.deleteSnippet(snippetId)
        .then(() => dispatch(removeSnippet(snippetId)))
);

export const fetchSnippetOwner = (ownerId, snippetId) => dispatch => {
    return(
        getSnippetOwner(ownerId)
            .then( res => dispatch(receiveOwnerUsername(res.data.username, snippetId)))
            .catch( () => console.log('----owner was not retrieved----'))
    )
}
