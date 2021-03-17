import api from "./";

const ENDPOINTS = {
  professionalTypes: "tipo-de-profissional",
};

export const getAll = async () => {
  try {
    const res = await api.get(ENDPOINTS.professionalTypes);

    if (res.status === 200) {
      return res.data;
    } else return [];
  } catch (e) {
    return null;
  }
};
