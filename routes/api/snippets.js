const express = require("express");
const router = express.Router();
const passport = require("passport");

const Snippet = require("../../models/Snippet");
const validateSnippetInput = require("../../validation/snippet");

router.get("/test", (req, res) => res.json({ msg: "This is the snippets route" }));

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
