import './Header.scss';
import Component from "@/plugins/component";
import {AsFragment, BindEvent} from "@/common/decorators";
import httpService from "@/common/servies/Http.service";
import {router} from "@/router/router";
import {mutation_types, store} from "@/store/store";
import SearchComponent from '@/common/components/search/search';

export default class Header extends Component {
    constructor(...props) {
        super(...props);
    }

    updateTemplate(template) {
        const SearchComp = new SearchComponent({
            search: this.props.search
        });

        return this.replaceSlot(
            template,
            { key: 'slot[name="elem-search"]', replacer: () => SearchComp.render() }
        )
    }

    @AsFragment
    getTemplate() {
        return `
            <header class="header d-flex">
                <div class="container_search">
                    <slot name="elem-search"></slot>
                </div>
                <button class="header__exit">
                    <i class="bi bi-door-open"></i>
                </button>
            </header>
       `
    }

    bindEvent(node) {
        const button = node.querySelector('.header__exit');
        button.addEventListener('click', this.onClickHandler.bind(this))
    }

    onClickHandler() {
        httpService.get('/logout')
            .catch(({ response }) => {
                if (response.status === 401) {
                    store.dispatch(mutation_types.SET_USER_INFO, null);
                    router.go('/sign-in');
                }
            })
    }

    @BindEvent
    render() {
        return this.updateTemplate(this.getTemplate());
    }
}