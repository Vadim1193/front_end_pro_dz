import './main.scss';
import MainApp from '@/config/main.config';
import App from './App';
import HttpService from '@/common/servies/Http.service';
import { mutation_types, store } from "@/store/store";

HttpService.get('/')
    .then((response) => {
        store.dispatch(mutation_types.SET_USER_INFO, response.data);
    })
    .catch((e) => {
        setTimeout(() => {
            store.dispatch(mutation_types.SET_ALERT, {
                type: 'alert-danger',
                message: e.message
            });
        });
    })
    .finally(() => MainApp(App, '#app'))
;
