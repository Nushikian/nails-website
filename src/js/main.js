import Feedback, {FormFeedBack} from './modules/feedback';
import {Validators} from './core/index';

document.addEventListener('DOMContentLoaded', () => {
 new FormFeedBack({
    showBtnFormSel: '.feedback-form-btn',
    parentSel: '.layout',
    formSel: '.feedback-form',
    apiPoint: 'feedbacks',
    submitBtnSel: '.feedback-form-submit',
    controls: {
        name: [Validators.required],
        feedback: [Validators.required],
    }
 }).init()
});