const synth = new Tone.Synth();
synth.oscillator.type = "sine";
synth.toMaster();

const piano = document.getElementById("piano");

piano.addEventListener("mousedown", e => {
    // fires off a note continously until trigger is released
    synth.triggerAttack(e.target.dataset.note);

    console.log(e.timeStamp);
    console.log(e.target.dataset);
    console.log(e.target.dataset.note);
});

piano.addEventListener("mouseup", e => {
    // stops the trigger
    synth.triggerRelease();
    // console.log(e);
});
