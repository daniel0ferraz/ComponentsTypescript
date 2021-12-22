import { useState } from 'react';
import React from 'react';
// import CodeVerification from '../../components/CodeVerification';
import VerificationInput from 'react-verification-input';
import './styles.css';

export default function Authenticate() {
  const [code, setCode] = useState('');

  const handleSubmit = () => {
    setCode(code);
    console.log(code);
  };

  return (
    <>
      <VerificationInput
        value="ada"
        length={6}
        placeholder={''}
        autoFocus={false}
        onChange={handleSubmit}
        classNames={{
          container: 'container',
          character: 'character',
          characterInactive: 'character--inactive',
          characterSelected: 'character--selected',
        }}
      />
    </>
  );
}
