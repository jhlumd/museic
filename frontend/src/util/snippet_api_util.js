import axios from "axios";

export const uploadSnippet = snippet => {
    return axios.post("/api/snippets/", snippet);
};
