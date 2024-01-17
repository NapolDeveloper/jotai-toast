import { atom } from 'jotai';

import { ToastProps, ToastType } from '../components/Toast';

export const toastsAtom = atom<ToastProps[]>([
  {
    type: 'error',
    message: 'test',
  },
]);

export const toastAtom = atom(
  null,
  (get, set, type: ToastType) => (message: string) => {
    const prevAtom = get(toastsAtom);
    const newToast = {
      type,
      message,
    };

    set(toastsAtom, [...prevAtom, newToast]);
  }
);
