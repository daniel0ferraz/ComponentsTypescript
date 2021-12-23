import React, { ChangeEventHandler } from 'react';
import VerificationInput from 'react-verification-input';
import './styles.css';
type Props = {
  value?: any;
  lenght: number;
  placeholder: string;
  autoFocus: boolean;
  removeDefaultStyles: boolean;
  classNames?: object;
  onChange?: (value: string) => void;
};

export default function CodeVerification({
  value,
  lenght,
  placeholder,
  autoFocus,
  removeDefaultStyles,
  onChange,
  ...rest
}: Props) {
  return <VerificationInput onChange={onChange} {...rest} />;
}
