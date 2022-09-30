import { NAVOPTIONS } from "./NavbarType";

export const navoptions = (data) => {
  return {
    type: NAVOPTIONS,
    payload: data,
  };
};
