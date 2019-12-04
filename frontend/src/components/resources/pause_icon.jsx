import React from 'react';

export default function PauseIcon(props) {
  return (
    <svg
      onClick={props.handlePause}
      className="icon pause-icon hvr-grow"
      viewBox="0 0 132 258"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
    >
      <path d="M11.468.012c5.241.731 9.287 5.161 9.531 10.455v236.997c-.325 7.036-7.977 12.237-14.293 9.791-3.32-1.287-5.875-4.368-6.528-7.862-.158-.849-.139-1.069-.179-1.929V10.467C.274 4.535 5.258-.275 11.468.012zM121.468.012c5.25.732 9.287 5.161 9.531 10.455v236.997c-.306 6.627-7.095 11.885-13.373 10.1-3.74-1.065-6.734-4.356-7.448-8.17-.158-.85-.139-1.07-.179-1.93V10.467c.275-5.932 5.259-10.742 11.469-10.455z" />
    </svg>
  );
}
