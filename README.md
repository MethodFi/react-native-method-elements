# react-method-elements  

[![NPM](https://img.shields.io/npm/v/react-method-elements.svg)](https://www.npmjs.com/package/react-method-elements)   

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
import  *  as  React  from  'react';
import  RNMethodElements  from  'react-native-method-elements';  

const  App = () => {
  const [token, setToken] = React.useState(null)

  React.useEffect(async () => {
    // Request for an element token from the
    // Method API (POST /elements/token)
    // through your backend server.
    setToken('pk_elem_123456789';
  })

  return  token ? (
    <RNMethodElements
      env='dev'  // (dev / sandbox / production)
      onOpen={(payload) => {}}
      onSuccess={(payload) => {}}
      onEvent={(payload) => {}}
      onExit={(payload) => {}}
      onError={(payload) => {}}
      token={token}
    />
  ) : null;
}

export default App;
```