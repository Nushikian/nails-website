import {DataBaseApi} from '../services/index';

export default class componentHTML {
    constructor({parentSel, apiPoint}) {
        this.$parent = document.querySelector(parentSel);
        this.apiPoint = apiPoint;
        this.data = null;
    }

    insert(html) {
        this.$parent.insertAdjacentHTML('beforeend', html);
    }

    createHTML() {}

    async loadData() {
        this.data = await DataBaseApi.getRequest(this.apiPoint);
        return this.data;
    }

    clear() {
        this.$parent.innerHTML = '';
    }

}