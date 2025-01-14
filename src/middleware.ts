import type { MiddlewareNext } from "astro";
import { defineMiddleware } from "astro:middleware";
import { firebase } from "./firebase/config";

const privateRoutes = ["/protected"];
const publicRoutes = ["/login", "/register"]

// `context` and `next` are automatically typed
export const onRequest = defineMiddleware(({ url, request, locals, redirect }, next) => {
    const user = firebase.auth.currentUser;
    const isLoggedIn = (user !== null);
    console.log("isLoggedIn", isLoggedIn);
    locals.isLoggedIn = isLoggedIn;

    if (user) {
        locals.user = {
            avatar: user.photoURL ?? '',
            email: user.email!,
            name: user.displayName!,
            emailVerified: user.emailVerified,
        };
    }

    if (!isLoggedIn && privateRoutes.includes(url.pathname)) {
        return redirect('/login');
    }

    if (isLoggedIn && publicRoutes.includes(url.pathname)) {
        return redirect('/');
    }


    return next();
});