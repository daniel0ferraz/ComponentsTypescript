import React from 'react';
import VerificationInput from 'react-verification-input';
import './styles.css';
type Props = {
  value: string;
  lenght: number;
  placeholder: string;
  autoFocus: boolean;
  removeDefaultStyles: boolean;
  classNames?: object;
};

export default function CodeVerification({
  value,
  lenght,
  placeholder,
  autoFocus,
  removeDefaultStyles,
  ...rest
}: Props) {
  return <VerificationInput {...rest} />;
}
