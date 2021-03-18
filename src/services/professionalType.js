import api from "./";

const ENDPOINTS = {
  professionalTypes: "tipos-de-profissional",
};

/**
 * Obtém todos os tipos de profissionais.
 *
 * @returns {Promise<null|*[]|T>}
 */
export const getAll = async () => {
  try {
    const res = await api.get(ENDPOINTS.professionalTypes);

    if (res.status === 200) {
      return res.data;
    }
    return [];
  } catch (e) {
    return null;
  }
};

/**
 * Cria um novo tipo de profissional.
 *
 * @param data
 * @returns {Promise<null|T>}
 */
export const create = async (data) => {
  try {
    const res = await api.post(ENDPOINTS.professionalTypes, data);

    if (res.status === 201) {
      return res.data;
    }
    return null;
  } catch (e) {
    return null;
  }
};
