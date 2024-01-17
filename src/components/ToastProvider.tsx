import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import { toastsAtom } from '../store/Toast.atom';
import { useAtomValue } from 'jotai';

import Toast from './Toast';

const ToastProvider = () => {
  const toasts = useAtomValue(toastsAtom);
  const portalRoot = document.getElementById('toast-portal');

  if (!portalRoot) {
    // If portalRoot is not found, you might want to handle this case accordingly
    return null;
  }

  return ReactDOM.createPortal(
    <Container>
      {toasts?.map((toast: any) => (
        <Toast key={toast.id} type={toast.type} message={toast.message} />
      ))}
    </Container>,
    portalRoot
  );
};

export default ToastProvider;

const Container = styled.div`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translate(-50%, 0);
`;
