// Imports
const chalk = require("chalk");
const fs = require("fs");

// Loading notes
const loadNotes = () => {
    try {
        const notes = fs.readFileSync("./notes.json").toString();
        return notes;
    } catch (error) {
        console.log(chalk.red.inverse("Notes not found!"));
        return [];
    }
}

// Savings notes
const saveNotes = (notes) => {
    fs.writeFileSync("./notes.json", JSON.parse(notes));
}

// Adding a note
const addNote = (title, body) => {
    const notes = loadNotes();
    const newNote = notes.find((note) => {
        if (note.title === title) {
            console.log(chalk.red.inverse("Note already exists!"));
        } else {
            notes.push(newNote);
            saveNotes(notes);
            console.log(chalk.green.inverse("Note added!"));
        }
    });
}

// Removing a note

// Listing a note

// Reading a note

module.exports = {
    addNote: addNote
}