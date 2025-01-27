const commonOptions = {
  position: 'topRight',
  pauseOnHover: true,
  closeOnClick: true,
};

import iziToast from 'izitoast';

export function showMessage(message) {
  iziToast.success({
    message,
    progressBarColor: '#007E33',
    title: 'Success',
    ...commonOptions,
  });
}

export function showError(message) {
  iziToast.error({
    message,
    progressBarColor: '#b51b1b',
    title: 'Error',
    ...commonOptions,
  });
}
