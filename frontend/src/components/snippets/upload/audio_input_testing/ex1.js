const notesArray = [];

const synth = new Tone.Synth();
synth.oscillator.type = "sine";
synth.toMaster();

const piano = document.getElementById("piano");

piano.addEventListener("mousedown", e => {
    synth.triggerAttack(e.target.dataset.note);

    notesArray.push({
        pitch: e.target.dataset.note,
        startTime: e.timeStamp
    });
});

piano.addEventListener("mouseup", e => {
    synth.triggerRelease();

    let lastNote = notesArray[notesArray.length - 1];
    lastNote.duration = e.timeStamp - lastNote.startTime;
});

/*----------------------------------------------------------------------------*/

// const notesArray = [];

// const synth = new Tone.Synth();
// synth.oscillator.type = "sine";
// synth.toMaster();

// const piano = document.getElementById("piano");

// piano.addEventListener("mousedown", e => {
//     synth.triggerAttack(e.target.dataset.note);

//     // console.log(e.timeStamp);
//     // console.log(e.target.dataset.note);

//     notesArray.push({
//         pitch: e.target.dataset.note,
//         unadjStartTime: Math.round(e.timeStamp / 100)
//     });
//     let lastNote = notesArray[notesArray.length - 1];
//     lastNote.startTime = lastNote.unadjStartTime - notesArray[0].unadjStartTime;
// });

// piano.addEventListener("mouseup", e => {
//     synth.triggerRelease();

//     // console.log(e.timeStamp);

//     let lastNote = notesArray[notesArray.length - 1];
//     lastNote.duration = Math.round(e.timeStamp / 100 - lastNote.unadjStartTime);
// });
