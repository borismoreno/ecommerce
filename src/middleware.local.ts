import type { MiddlewareNext } from "astro";
import { defineMiddleware } from "astro:middleware";

const privateRoutes = ["/protected"];

// `context` and `next` are automatically typed
export const onRequest = defineMiddleware(({ url, request }, next) => {

    const authHeaders = request.headers.get('authorization') ?? '';
    console.log(authHeaders);

    if (privateRoutes.includes(url.pathname)) {
        return checkLocalAuth(authHeaders, next);
    }
    return next();
});

const checkLocalAuth = (authHeaders: string, next: MiddlewareNext) => {
    console.log(authHeaders);
    if (authHeaders) {
        const authValue = authHeaders.split(' ')[1] ?? 'user:pass';
        const decodedValue = atob(authValue).split(':');
        const [user, password] = decodedValue;

        console.log(user, password);

        if (user === 'admin' && password === 'admin') {
            return next();
        }
    }

    return new Response("Unauthorized", { status: 401, headers: { 'WWW-Authenticate': 'Basic real="Secure Area' } });

}