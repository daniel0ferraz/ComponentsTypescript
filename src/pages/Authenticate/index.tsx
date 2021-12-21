import { useState } from 'react';
import React from 'react';
import CodeVerification from '../../components/CodeVerification';
import './styles.css';

export default function Authenticate() {
  const [code, setCode] = useState('');

  const handleSubmit = () => {
    setCode(code);
    console.log(code);
  };

  return (
    <>
      <CodeVerification
        value="ada"
        lenght={3}
        placeholder={''}
        autoFocus={false}
        removeDefaultStyles={true}
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
