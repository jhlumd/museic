const express = require("express");
const router = express.Router();
const passport = require("passport");

const Snippet = require("../../models/Snippet");
const validateSnippetInput = require("../../validation/snippet");

// need to make index only show public snippets or own snippets
router.get("/", (req, res) => {
    Snippet.find()
        .sort({ date: -1 })
        .then(snippets => res.json(snippets))
        .catch(err => res.status(404).json({
            noSnippetsFound: "No snippets found"
        }));
});

router.post(
    "/",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        const { errors, isValid } = validateSnippetInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newSnippet = new Snippet({
            title: req.body.title,
            description: req.body.description,
            user: req.user.id,
            public: req.body.public,
            notes: req.body.notes
        });

        newSnippet.save().then(snippet => res.json(snippet));
    }
);

module.exports = router;
