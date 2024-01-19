import baseAPI from "../config";

export type ResponseType = {
    data?: any;
    count?: number,
    success: boolean,
    message: string;
}
export const getDailySessions = async (): Promise<ResponseType> => {
    try {
        const {data} = await baseAPI.get(`/insights/dailySessions`);
        return data;
    } catch (e: any) {
        return e?.response?.data ?? null;
    }
}

export const getSessionsPerCountry = async (): Promise<ResponseType> => {
    try {
        const {data} = await baseAPI.get(`/insights/sessionsPerCountry`);
        return data;
    } catch (e: any) {
        return e?.response?.data ?? null;
    }
}

export const getPercentagePerCountry = async (): Promise<ResponseType> => {
    try {
        const {data} = await baseAPI.get(`/insights/percentagePerCountry`);
        return data;
    } catch (e: any) {
        return e?.response?.data ?? null;
    }
}

export const getTopIntents = async (): Promise<ResponseType> => {
    try {
        const {data} = await baseAPI.get(`/insights/topIntents`);
        return data;
    } catch (e: any) {
        return e?.response?.data ?? null;
    }
}

export const getNegativeFeedbackConversations =  async (): Promise<ResponseType> => {
    try {
        const {data} = await baseAPI.get(`/insights/negativeFeedback`);
        return data;
    } catch (e: any) {
        return e?.response?.data ?? null;
    }
}
