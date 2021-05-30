export default class FormData {
    constructor(form, controls) {
        this.form = form;
        this.controls = controls;
    }

    value() {
        const value = {};
        
        Object.keys(this.controls).forEach(control => {
            value[control] = this.form[control].value
        });

        return value;
    }

    isValid() {
        let isFormValid = true;

        Object.keys(this.controls).forEach(control => {
            const validators = this.controls[control];

            let isValid = true;

            validators.forEach(validator => {
                isValid = validator(this.form[control].value) && isValid;
            });

            isValid ? _clearError(this.form[control]) :  _setError(this.form[control]);

          
            isFormValid = isFormValid && isValid;
        });

        return isFormValid;
    }

    clear() {
        this.form.reset();
    }

    destroy() {
        this.form = null;
        this.controls = null;
    }
}

function _setError($control) {
    _clearError($control);
    const error = '<p class="validation-error">Введите коректное значение</p>'
    $control.classList.add('invalid');
    $control.insertAdjacentHTML('afterend', error);
}

function _clearError($control) {
    $control.classList.remove('invalid');
    if($control.nextElementSibling) $control.nextElementSibling.remove();
}