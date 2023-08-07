import Router from "@/plugins/router";
import Movies from "@/pages/movies/Movies";
import SignIn from "@/pages/signIn/SignIn";
import SignUp from "@/pages/sign-up/SignUp";
import NotFound from "@/pages/not-found/NotFound";

const routes = [
    {
        path: '/',
        component: Movies
    },
    {
        path: '/sign-in',
        component: SignIn,
        beforeEach() {

        }
    },
    {
        path: '/sign-up',
        component: SignUp
    },
    {
        path: '*',
        component: NotFound
    }
]

export const router = new Router(routes);

const isAuth = true;

router.beforeEach(function (from, to, next) {
    if (isAuth) {
        next();
        return;
    }

    next('/sign-in')

} )