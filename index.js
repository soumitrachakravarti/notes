// Imports
const yargs = require("yargs");
const notes = require("./notes");

// Creating commands with Yargs

// Add
yargs.command({
    command: "add",
    describe: "Add a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
});

// Remove
yargs.command({
    command: "remove",
    describe: "Remove a note",
    builder: {
        title: {
            describe: "Note title to be removed",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }    
});
// List
yargs.command({
    command: "list",
    describe: "List all notes",
    handler() {
        notes.listNotes();
    }
});
// Read
yargs.command({
    command: "read",
    describe: "Read a note",
    builder: {
        title: {
            describe: "Note title ",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
});

// Verioning with Yargs
yargs.version("0.0.1");

// Parsing with Yargs
yargs.parse();