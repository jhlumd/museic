import React from "react";

export default function SnippetBar(props) {
  const { pitch, startTime, duration } = props;

  const pitchToNum = {
    C6: 0,
    B5: 1,
    "A#5": 2,
    A5: 3,
    "G#5": 4,
    G5: 5,
    "F#5": 6,
    F5: 7,
    E5: 8,
    "D#5": 9,
    D5: 10,
    "C#5": 11,
    C5: 12,
  };

  const noteStyle = {
    top: ((pitchToNum[pitch] || 12) / 13) * 100 + "%",
    left: (startTime / 32) * 100 + "%",
    width: (duration / 32) * 100 + "%",
    backgroundColor: `rgb(${props.backgroundColor[0]}, ${props.backgroundColor[1]}, ${props.backgroundColor[2]})`,
  };

  return (<div className="single-note hvr-float" style={noteStyle}></div>);
}
