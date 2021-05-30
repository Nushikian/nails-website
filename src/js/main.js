import FeedbackHTML, {FormFeedBack} from './modules/feedback';
import {Validators} from './core/index';

document.addEventListener('DOMContentLoaded', () => {
    new FeedbackHTML({parentSel: '.layout', apiPoint: 'feedbacks'}).init()
    new FormFeedBack({
        parentSel: '.feedback-wrapper',
        formSel: '.feedback-form',
        apiPoint: 'feedbacks',
        submitBtnSel: '.feedback-form-submit',
        controls: {
            name: [Validators.required],
            service: [Validators.required],
            feedback: [Validators.required],
        }
    }).init()
});