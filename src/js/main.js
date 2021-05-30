import Feedback, {FormFeedBack} from './modules/feedback';
import {Validators} from './core/index';

document.addEventListener('DOMContentLoaded', () => {
 new FormFeedBack({
    parentSel: 'body',
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