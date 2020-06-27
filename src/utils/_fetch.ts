
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

const _fetch = async <T>(url: string, method: HttpMethod, data: any): T => {
    let _uri = encodeURI(url);
    _uri += data && method === 'GET' ? `?${objectToUrlQuery(data)}` : '';
    
    const response = await fetch(_uri, {
        method,
        body: method !== 'GET' ? data : undefined,
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    })

    if (response.ok) {
        const text = await response.text();
        return JSON.parse(text) as T;
    }
}

function objectToUrlQuery(obj: Object): string{
    let list = Object
        .keys(obj)
        .map(key => obj[key] === undefined ? undefined : `${encodeURI(key)}=${encodeURIComponent(obj[key]?.toString())}`)
        .filter(s => s);
    return list.join("&");
}