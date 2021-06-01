import iziToast from 'izitoast';

export function success(message = 'Data success send') {
    iziToast.success({
        title: 'Success',
        message: message,
        close: true,
        closeOnEscape: true,
        closeOnClick: true,
        position: 'topCenter',
    });
}

export function error(message = 'Something went wrong...') {
    iziToast.error({
        title: 'Error',
        message: message,
        close: true,
        closeOnEscape: true,
        closeOnClick: true,
        position: 'topCenter',
    });
}