import api from "./";

const ENDPOINTS = {
    professional: "profissionais",
};

/**
 * Busca todos os profissionais.
 *
 * @returns {Promise<null|*[]|T>}
 */
export const getAll = async () => {
    try {
        const res = await api.get(ENDPOINTS.professional);

        if (res.status === 200) {
            return res.data;
        }
        return [];
    } catch (e) {
        return null;
    }
};

/**
 * Cria um novo profissional.
 *
 * @param data
 * @returns {Promise<null|T>}
 */
export const create = async (data) => {
    try {
        const res = await api.post(ENDPOINTS.professional, data);

        if (res.status === 201) {
            return res.data;
        }
        return null;
    } catch (e) {
        return null;
    }
};
