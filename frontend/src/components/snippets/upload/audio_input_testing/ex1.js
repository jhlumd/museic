// const notesArray = [];

// const synth = new Tone.Synth();
// synth.oscillator.type = "sine";
// synth.toMaster();

// const piano = document.getElementById("piano");

// piano.addEventListener("mousedown", e => {
//     synth.triggerAttack(e.target.dataset.note);

//     notesArray.push({
//         pitch: e.target.dataset.note,
//         startTime: e.timeStamp
//     });
// });

// piano.addEventListener("mouseup", e => {
//     synth.triggerRelease();

//     let lastNote = notesArray[notesArray.length - 1];
//     lastNote.duration = e.timeStamp - lastNote.startTime;
// });

/*----------------------------------------------------------------------------*/

window.state = {
    title: "",
    description: "",
    public: true,
    notes: null,
    errors: []
};

const notesArray = [];
const timeLimit = 32;


const synth = new Tone.Synth();
synth.oscillator.type = "sine";
synth.toMaster();

const piano = document.getElementById("piano");

piano.addEventListener("mousedown", e => {
    synth.triggerAttack(e.target.dataset.note);

    // notesArray => this.notesArray
    // timeLimit => this.timeLimit
    notesArray.push({ 
        pitch: e.target.dataset.note,
        unadjStartTime: Math.ceil(e.timeStamp / 250) 
    });
    const lastNoteDown = notesArray[notesArray.length - 1];
    lastNoteDown.startTime = lastNoteDown.unadjStartTime - notesArray[0].unadjStartTime;

    if (lastNoteDown.startTime < timeLimit) {
        window.state = {
            notes: notesArray.slice()
        };
    }
});

piano.addEventListener("mouseup", e => {
    synth.triggerRelease();

    const lastNoteUp = notesArray[notesArray.length - 1];
    const dur = Math.ceil(e.timeStamp / 250 - lastNoteUp.unadjStartTime);
    lastNoteUp.duration = (dur === -0 ? 1 : dur);

    if (lastNoteUp.startTime + lastNoteUp.duration <= timeLimit) { 
        window.state = {
            notes: notesArray.slice()
        };
    } else if (lastNoteUp.startTime < timeLimit) {
        lastNoteUp.duration = timeLimit - lastNoteUp.startTime;
        window.state = {
            notes: notesArray.slice()
        };
    }
});
