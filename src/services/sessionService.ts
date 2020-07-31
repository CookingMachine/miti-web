import { __API__ } from "consts";

export type HTTPMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export const _fetch = async <T>(uri: string, method?: HTTPMethod, data?: object): Promise<T> => {
    const encodedURI = encodeURI(`${__API__}/${uri}`);
    const fullURI = data && method === "GET" ? `${encodedURI}?${objectToUrlQuery(data)}` : encodedURI;

    const response = await fetch(fullURI, {
        method: method || "GET",
        body: method === "GET" ? undefined : JSON.stringify(data),
        headers: {
            // "Content-Type": "application/json; charset=utf-8",
        },
    });

    if (response.ok) {
        const json = await response.text();
        return JSON.parse(json) as T;
    }

    throw new ApiError(`Fetch failed (${response.status})`);
}

class ApiError extends Error {
    constructor(message: string) {
        super(message);
    }
}

function objectToUrlQuery(obj: Record<string, any>): string{
    let list = Object
        .keys(obj)
        .map(key => obj[key] === undefined || obj[key] === null ? undefined : `${encodeURI(key)}=${encodeURIComponent(obj[key].toString())}`)
        .filter(s => s);
    return list.join("&");
}


class SessionService {
    constructor() {
    }
}

export const sessionService = new SessionService();