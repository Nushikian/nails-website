import {FormHTML, ComponentHTML} from '../core/index';
import {DataBaseApi} from '../services/index';
import {feedbackTemplateHTML} from '../templates/feedback';
export default class FeedbackHTML extends ComponentHTML {
    constructor(options) {
        super(options);
    }

    async init() {
        console.log(this)
        const data = await this.loadData();
        this.clear();
        this._renderPosts(data)
    }

    createHTML(feedback, name) {
        return feedbackTemplateHTML(feedback, name)
    }

    _renderPosts(data) {
        DataBaseApi.normalizeData(data).forEach(({feedback, name }) => {
            this.insert(this.createHTML(feedback, name));
        });
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
        console.log(this, formData);

        if(!this.isValid()) return;
        
        const resp = await DataBaseApi.postRequest(this.apiPoint, formData);
        console.log(resp);

        const feedback = new FeedbackHTML({parentSel: '.layout', apiPoint: 'feedbacks'});
        feedback.insert(feedback.createHTML(formData.feedback, formData.name));

        this.clear();
    }

    destroy() {
        this.$showBtn.removeEventListener('click', this.toggleForm);
        this.$form.removeEventListener('submit', this.onSubmit)
    }
}