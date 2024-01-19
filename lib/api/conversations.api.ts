import baseAPI from "../config";
import {ResponseType} from "./insights.api";

export const getListOfIntents = async (): Promise<ResponseType> => {
    try {
        const {data} = await baseAPI.get(`/conversations/intents`);
        return data;
    } catch (e: any) {
        return e?.response?.data ?? null;
    }
}


export const getConversations = async (intent: string): Promise<ResponseType> => {
    try {
        const {data} = await baseAPI.get(`/conversations?intent=${intent}`);
        return data;
    } catch (e: any) {
        return e?.response?.data ?? null;
    }
};


export const getAllConversations = async (): Promise<ResponseType> => {
    try {
        const {data} = await baseAPI.get(`/conversations/getAll`);
        return data;
    } catch (e: any) {
        return e?.response?.data ?? null;
    }
};
