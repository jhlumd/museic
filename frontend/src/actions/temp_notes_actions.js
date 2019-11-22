export const RECEIVE_TEMP_NOTES = "RECEIVE_TEMP_NOTES";
export const CLEAR_TEMP_NOTES = "CLEAR_TEMP_NOTES";

export const saveTempNotes = tempNotes => {
  return {
    type: RECEIVE_TEMP_NOTES,
    tempNotes
  };
};

export const clearTempNotes = () => {
  return {
    type: CLEAR_TEMP_NOTES
  };
};
