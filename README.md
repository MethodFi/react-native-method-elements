# react-native-method-elements

[![NPM](https://img.shields.io/npm/v/react-method-elements.svg)](https://www.npmjs.com/package/react-native-method-elements)   

## Introduction
Official react native components for Method. See [Method Elements reference](https://docs.methodfi.com/api/elements/intro) to learn more.

## Install  

```bash
npm install --save react-native-method-elements

or

yarn install --save react-native-method-elements
```  

## Usage

```jsx
import * as React from  'react';
import { RNMethodElements } from 'react-native-method-elements';

const  App = () => {
  const [token, setToken] = React.useState(null);

  React.useEffect(() => {
    // Request for an element token from the
    // Method API (POST /elements/token)
    // through your backend server.
    setToken('pk_elem_123456789');
  });
  
  if (!token) return null;

  return (
    <RNMethodElements
      env="dev"  // (dev / sandbox / production)
      token={token}
      onOpen={(payload) => console.log('onOpen', payload)}
      onSuccess={(payload) => console.log('onSuccess', payload)}
      onEvent={(payload) => console.log('onEvent', payload)}
      onExit={(payload) => console.log('onExit', payload)}
      onError={(payload) => console.log('onError', payload)} />
  );
}

export default App;
```
