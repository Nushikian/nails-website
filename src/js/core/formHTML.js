import {FormData} from '../core/index'

export default class FormHTML {
    constructor({showBtnFormSel, controls, parentSel, formSel, apiPoint, hideCls = 'hide', showCls = 'show', submitBtnSel }) {
        this.hideCls = hideCls;
        this.showCls = showCls;
        this.$parent = document.querySelector(parentSel);
        this.$showBtn = this.$parent.querySelector(showBtnFormSel);
        this.$form = this.$parent.querySelector(formSel);
        this.apiPoint = apiPoint;
        this.$submitForm = this.$parent.querySelector(submitBtnSel)
        this.controls = controls;
    }

    init() {
        this.form = new FormData(this.$form, this.controls)
    }

    destroy() {}

    successSendData() {}
    errorSendData() {}

    onSubmit() {}

    isValid() {
        return this.form.isValid();
    }

    getFormValue() {
        return {...this.form.value()}
    }

    clear() {
        return this.form.clear();
    }

    show() {
        this.$form.classList.remove(this.hideCls);
        this.$form.classList.add(this.showCls);
    }

    hide() {
        this.$form.classList.remove('show');
        this.$form.classList.add('hide');
    }

    toggleForm() {
        console.log('toogle')
        this.$form.classList.toggle('hide');
        this.$form.classList.toggle('show');
    }
}