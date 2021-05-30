import {FormHTML} from '../core/index';
import {DataBaseApi} from '../services/index';
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
        console.log('init',this)
        super.init();
        this.$form.addEventListener('submit', this.onSubmit)
    }

    async onSubmit(e) {
        e.preventDefault();

        const formData = this.getFormValue();
        formData.date = new Date();
        console.log(formData);

        if(!this.isValid()) return;
        
        const resp = await DataBaseApi.postRequest(this.apiPoint, formData);
        console.log(resp);


        this.clear();
    }

    destroy() {
        this.$showBtn.removeEventListener('click', this.toggleForm);
        this.$form.removeEventListener('submit', this.onSubmit)
    }
}