import {FormHTML} from '../core/index'
export default class Feedback {
    constructor() {
        console.log('feedback');
    }
}

export class FormFeedBack extends FormHTML {
    constructor(options) {
        super(options);

        this.toggleForm = this.toggleForm.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    init() {
        super.init();
        console.log('init form', this)
        this.$showBtn.addEventListener('click', this.toggleForm);
        this.$form.addEventListener('submit', this.onSubmit)
    }

    onSubmit(e) {
        e.preventDefault();
        this.clear();
        this.hide();
    }

    destroy() {
        this.$showBtn.removeEventListener('click', this.toggleForm);
        this.$form.removeEventListener('submit', this.onSubmit)
    }
}