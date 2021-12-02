import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Toast} from './styles';

type Props ={
    type: string,
    message: string,
}

export const showToast = ({ type, message }:Props) => {
  switch (type) {
    case 'success':
      toast.success(message);
      break;
    case 'warn':
      toast.warn(message);
      break;
    case 'error':
      toast.error(message);
      break;
    default:
      toast.info(message);
  }
};
export default function ToastAnimated() {
  return <Toast />;
}