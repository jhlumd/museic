export const IS_PLAYING = "IS_PLAYING";
export const IS_PAUSED = "IS_PAUSED";

export const startPlayback = () => {
  return {
    type: IS_PLAYING
  };
};

export const pausePlayback = () => {
  return {
    type: IS_PAUSED
  };
};
