import axios from "axios";

export const getSnippets = () => {
    return axios.get("/api/snippets");
};

export const getUserSnippets = userId => {
    return axios.get(`/api/snippets/user/${userId}`);
};

export const getSnippet = snippetId => {
    return axios.get(`/api/snippets/${snippetId}`);
};

export const saveSnippet = snippet => {
    return axios.post("/api/snippets/", snippet);
};

export const deleteSnippet = snippetId => {
    return axios.delete(`/api/snippets/${snippetId}`);
};
