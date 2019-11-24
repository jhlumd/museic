import React from 'react';

export default function SnippetBar(props) {
  const { pitch, startTime, duration } = props;
  let barTop;
  switch (pitch) {
    case "C6":
      barTop = 0;
      break;
    case "B5":
      barTop = 1;
      break;
    case "A#5":
      barTop = 2;
      break;
    case "A5":
      barTop = 3;
      break;
    case "G#5":
      barTop = 4;
      break;
    case "G5":
      barTop = 5;
      break;
    case "F#5":
      barTop = 6;
      break;
    case "F5":
      barTop = 7;
      break;
    case "E5":
      barTop = 8;
      break;
    case "D#5":
      barTop = 9;
      break;
    case "D5":
      barTop = 10;
      break;
    case "C#5":
      barTop = 11;
      break;
    case "C5":
      barTop = 12;
      break;
    default:
      barTop = 13;
      break;
  }

  const noteStyle = {
    top: (barTop / 13) * 100 + "%",
    left: (startTime / 32) * 100 + "%",
    width: (duration / 32) * 100 + "%",
    backgroundColor: `rbg(${props.backgroundColor[0]}, ${props.backgroundColor[1]}, ${props.backgroundColor[2]})`
  };
  return (
    <div
      className="single-note hvr-float"
      style={noteStyle}
    ></div>
  );
}
