import { API } from "../../../backend";

export const getHotels = () => {
  return fetch(`${API}/hotels`, {
    method: "GET",
  });
};
