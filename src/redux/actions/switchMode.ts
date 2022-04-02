export const switchMode = (mode: "Runtime" | "Constructor") => ({
  type: "SWITCH_MODE",
  payload: mode,
});
