import {toast } from 'react-toastify';

const notifyConfig = {
    autoClose: 3000
}
export const error = message => toast(`Ooops, something failed!${message}`, notifyConfig);

export const greeting = () => toast(`Hello Financial genius, waiting for update`, notifyConfig);