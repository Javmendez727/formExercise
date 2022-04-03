import actionTypes from "../actionTypes";

export const updateInputContent = (newValue: string, type: string) => ({
  type,
  newValue,
});

export const enableButtonUser = (newState: boolean) => ({
  type: actionTypes.ENABLE_BUTTON_FORM,
  newState,
});

export const addListContent = (type: string) => ({
  type,
});

export const resetValuesInputs = (type: string) => ({
  type,
});

export const removeUserFromList = (type: string, indexUser: number) => ({
  type,
  indexUser,
});
