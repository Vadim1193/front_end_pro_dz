import Component from "@/plugins/component";
import Loader from "@/common/components/loader/Loader";
import { AsFragment } from "@/common/decorators";
import Alert from "@/common/components/alert/Alert";

export default class App extends Component {
    @AsFragment
    getTemplate() {
        return `
            <main class="main-app d-flex min-vh-100">
               <div class="router-view d-flex flex-column"></div>
               <slot name="loader"></slot>
               <slot name="alert"></slot>
            </main>
        `
    }

    updateTemplate(template) {
        return this.replaceSlot(
            template,
            { key: 'slot[name="loader"]', replacer: () => new Loader().render() },
            { key: 'slot[name="alert"]', replacer: () => new Alert().render() },
        );
    }

    render() {
        return this.updateTemplate(
            this.getTemplate()
        )
    }
}