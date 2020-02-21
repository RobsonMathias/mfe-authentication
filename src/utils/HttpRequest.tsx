export interface HttpRequest {
    get(url: string, query: any): Promise<any>
    put(url: string, body: any, query?: any): Promise<any>
    post(url: string, body: any, query?: any): Promise<any>
    delete(url: string, body: any, query?: any): Promise<any>
    patch(url: string, body: any, query?: any): Promise<any>
}

export const http = {
    get request(): HttpRequest {
        return window.Authentication && window.Authentication.httpRequest;
    }
};
