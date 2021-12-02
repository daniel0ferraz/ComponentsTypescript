import styled from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export const Toast = styled(ToastContainer)`
    
  .Toastify__toast--info {
    background: 'rgb(51, 102, 255)';
  }
.Toastify__toast--success {
    background: 'rgb(51, 187, 102)';
  }
.Toastify__toast--warning {
    background: 'rgb(254, 255, 20)';
  }
.Toastify__toast--error {
    background: 'rgb(255, 102, 102)';
  }

  .Toastify__close-button--light {
    color: #000;
    opacity: 0.3;
    display: contents;
}
`;