import * as ApiUtil from '../util/snippet_api_util';

export const RECEIVE_NEW_SNIPPET = 'RECEIVE_NEW_SNIPPET';

export const receiveNewSnippet = snippet => {
    return {
        type: RECEIVE_NEW_SNIPPET,
        snippet
    };
};

export const uploadSnippet = formData => dispatch => (
    ApiUtil.uploadSnippet(formData)
        .then(snippet => dispatch(receiveNewSnippet(snippet)))
        .catch(err => console.log(err))
);