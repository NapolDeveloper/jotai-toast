import React from 'react';
import styled from 'styled-components';

export type ToastType = 'success' | 'info' | 'error';

export interface ToastProps {
  type: ToastType;
  message?: string;
}

const Toast = ({ type, message = 'test' }: ToastProps) => {
  return <Container>{message}</Container>;
};

export default Toast;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  height: 40px;
  background-color: white;
  border-radius: 4px;
`;
