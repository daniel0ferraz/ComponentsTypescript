import { useState } from 'react';
import React from 'react';
import CodeVerification from '../../components/CodeVerification';
//import VerificationInput from 'react-verification-input';
import './styles.css';

type Code = {
  coding: string;
};

export default function Authenticate() {
  const [code, setCode] = useState({} as Code);

  const handleChange = (value: string) => {
    setCode((oldState) => ({ ...oldState, value }));
    //setCode((oldState) => ({ ...oldState, value: value }));
  };

  const handleSubmit = async () => {
    console.log(code);
    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <CodeVerification
        value={code}
        lenght={6}
        placeholder={''}
        autoFocus={false}
        onChange={handleChange}
        removeDefaultStyles={true}
        classNames={{
          container: 'container',
          character: 'character',
          characterInactive: 'character--inactive',
          characterSelected: 'character--selected',
        }}
      />

      <button onClick={handleSubmit}>Enviar</button>
    </>
  );
}
