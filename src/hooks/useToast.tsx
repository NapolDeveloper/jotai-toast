import { useSetAtom } from 'jotai';

import { toastAtom } from '../store/Toast.atom';

const useToast = () => {
  const addToast = useSetAtom(toastAtom);

  return {
    success: addToast('success'),
    error: addToast('error'),
    info: addToast('info'),
  };
};

export default useToast;
