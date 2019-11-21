import axios from "axios";

export const saveSnippet = snippet => {
    return axios.post("/api/snippets/", snippet);
};
