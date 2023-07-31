import { router } from "@/router/router";

function MainApp(instanceComp, selector) {
    document.querySelector(selector).innerHTML = instanceComp;
    router.onInit();

    router.go(location.pathname);
}

export default MainApp;