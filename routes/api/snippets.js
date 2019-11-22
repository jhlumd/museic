const express = require("express");
const router = express.Router();
const passport = require("passport");
const mongoose = require("mongoose"); // required?

const Snippet = require("../../models/Snippet");
const validateSnippetInput = require("../../validation/snippet");

// need to make index only show public snippets or own snippets
router.get("/", (req, res) => {
    Snippet.find()
        .sort({ date: -1 })
        .then(snippets => res.json(snippets))
        .catch(err => res.status(404).json({
            nosnippetsfound: "No snippets found"
        }));
});

// index for user show page
router.get("/user/:user_id", (req, res) => {
    Snippet.find({ user: req.params.user_id })
        .then(snippets => res.json(snippets))
        .catch(err => res.status(404).json({
            nosnippetsfound: "No snippets found from that user"
        }));
});

// single snippet show page
router.get("/:id", (req, res) => {
    Snippet.findById(req.params.id)
        .then(snippet => res.json(snippet))
        .catch(err => res.status(404).json({
            nosnippetfound: "No snippet found with that ID"
        }));
});

// create snippet form
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

// delete a snippet
router.delete('/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const snippetId = req.params.id;
        Snippet.deleteOne({ _id: snippetId })
            .then(() => res.json({ msg: `Snippet id: ${snippetId} deleted` }))
            .catch(err => console.log(err));
    }
);

module.exports = router;
