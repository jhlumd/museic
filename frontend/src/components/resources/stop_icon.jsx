import React from 'react';

export default function StopIcon(props) {
  return (
    <svg
      onClick={props.handleStop}
      className="icon stop-icon hvr-grow"
      viewBox="0 0 259 258"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="1.5"
    >
      <path
        stroke="#000"
        strokeWidth="20.9971827"
        d="M10.5 10.5h237.08v236.06H10.5z"
      />
    </svg>
  );
}
